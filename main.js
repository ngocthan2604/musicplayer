
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// biến in dom
var playlist = $('.playlist');
var heading = $('.header__name-musis');
var cdThumd = $('.cd-thumb');
var audio = $('.audio');
var playBtn = $('.control-play');
var progress =$('.progress');
var next = $('.control-next');
var pre = $('.control-pre');
var repeat = $('.control-repeat');
var random = $('.control-random');

const app = {
    currentIndex: 0,
    isplaying : false,
    israndom:false,
    isrepeat:false,
    
    songs: [
        {
          name: "Nevada",
          singer: "Raftaar x Fortnite",
          path: "./assets/audio/nevada.mp3",
          image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
        },
        {
          name: "Summertime",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "./assets/audio/sumertime.mp3",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
          name: "TheFatRat",
          singer: "Raftaar x Brobha V",
          path:
            "./assets/audio/nonody.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
          name: "Reality",
          singer: "Raftaar x Nawazuddin Siddiqui",
          path: "./assets/audio/reality.mp3",
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
          name: "Monsters",
          singer: "Raftaar",
          path: "./assets/audio/monster.mp3",
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
          name: "Never Be Alone",
          singer: "Raftaar x kana",
          path:
            "./assets/audio/neverBeAlone.mp3",
          image:
            "https://i.ytimg.com/vi/gHgv19ip-0c/maxresdefault.jpg"
        },
        {
          name: "See You Again",
          singer: "Raftaar x Harjas",
          path: "./assets/audio/seeYouAgain.mp3",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        }
      ],

    //hàm định nghĩa các thuộc tính 
    definedProperties: function(){
        Object.defineProperty(this,'currentSong',{
            get: function(){
                return this.songs[this.currentIndex];
        }})
    },

    //hàm xử lí các sự  kiện
    handleEvents: function(){
        var _this =this;

        //Event croll ẩn cd
        cd = $('.cd');
        cdWidth = cd.offsetWidth;

        document.onscroll = function(){
            var scroll = window.scrollY || document.documentElement.scrollTop;
            var newCdWidth = cdWidth - scroll;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0 ;
            cd.style.opacity = newCdWidth  / cdWidth;
        }

        // Event play pause 
        playBtn.onclick = function(){
            if(_this.isplaying){
                audio.pause();
            }
            else{
                audio.play();
            }
        }

        audio.onpause = function(){
            _this.isplaying = false;
            playBtn.classList.remove('playing');

            cdThumbAnimate.pause();
        }

        audio.onplay = function(){
            _this.isplaying = true;
            playBtn.classList.add('playing');

            cdThumbAnimate.play();

        }

        // Event tua và chạy thời gian song
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = (audio.currentTime / audio.duration *100);
                progress.value = Math.floor(progressPercent);
            }
        }

        // Event tua audio
        progress.onchange = function(e){
            var seekTime = e.target.value/100*audio.duration;
            audio.currentTime = seekTime;
        }

        // Event cd quay rotate
        var cdThumbAnimate = cdThumd.animate(
            [{transform : 'rotate(360deg)'}],{
                duration: 10000,
                iterations: Infinity
            }
        )
        cdThumbAnimate.pause();
            
        // Event next audio
        next.onclick = function(){
            if(_this.israndom){
                _this.randomSong();
            }
            else{
                _this.nextSong();
                _this.loadCurrentSong();
            }
            audio.play();
            _this.render()
            _this.scrollToActiveSong();
        }

        // Event Pre audio
        pre.onclick = function(){
            if(_this.israndom){
                _this.randomSong();
            }
            else{
                _this.preSong();
                _this.loadCurrentSong();
            }
            audio.play();
            _this.render()
            _this.scrollToActiveSong();
        }

        // Event repeat audio
        repeat.onclick = function(){
            _this.isrepeat = !_this.isrepeat;
            this.classList.toggle('active',_this.isrepeat)
        }
        // Event random audio
        random.onclick = function(){
            _this.israndom = !_this.israndom;
            this.classList.toggle('active',_this.israndom);
        }

        // Event audio kết thúc (ended)
        audio.onended = function(){
            if(_this.isrepeat){
                audio.play();
            }
            else{
                next.onclick();
            }
        }

        // Event click vô playlist
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)');
            if(songNode || e.target.closest('.song-option')){
                // xử lí khi click vô node
                if(songNode){
                    _this.currentIndex = parseInt(songNode.dataset.index)
                    _this.loadCurrentSong();
                    _this.scrollToActiveSong();
                    _this.render();
                    audio.play(); 
                }

                //xử lí click vô option 
                if(e.target.closest('.song-option')){
                    alert('Plese Login');
                }
            }
        }
        
    },


    //hàm hiện song đầu tiên
    loadCurrentSong: function(){
        heading.innerText = this.currentSong.name;
        cdThumd.style.backgroundImage = `url("${this.currentSong.image}")`;
        audio.setAttribute('src',`${this.currentSong.path}`);

    },

    //hàm render ra dom
    render: function(){
        var html = this.songs.map(function(song,index){
            return `
                <div class="song ${index === app.currentIndex ? 'active' : ' '}" " data-index ="${index}">
                    <div class="song-infor">
                        <div class="song-img" style="background-image: url('${song.image}');"></div>
                        <div class="song-desc">
                            <h2 class="song-title">${song.name}</h2>
                            <p class="song-singer">${song.singer}</p>
                        </div>
                    </div>
                    <div class="song-option">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            `
        })
        return playlist.innerHTML = html.join('');    
    },  
      
    // hàm tiến lên bài sau
    nextSong: function(){
        this.currentIndex ++;
        if(this.currentIndex > this.songs.length - 1){
            return this.currentIndex = 0;
        }
    },

    // Hàm quay về bài trước
    preSong: function(){
        this.currentIndex --;
        if(this.currentIndex < 0){
            return this.currentIndex = this.songs.length - 1;
        }    
    },

    // Hàm phát ngẫu nhiên
    randomSong: function(){
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * this.songs.length);
        }
        while(newIndex === this.currentIndex);

        this.currentIndex = newIndex;

        this.loadCurrentSong();
    },

    // hàm hiển thị bài active lên view
    scrollToActiveSong: function(){
        setTimeout(() => {
            $('.song.active').scrollIntoView({
               behavior: 'smooth',
               block: 'end',
            })
        }, 300);
    },

    //hàm bắt đầu chạy
    start: function(){
        //định nghĩa các thuộc tính
        this.definedProperties();
        //load bài hiển thị đầu tiên
        this.loadCurrentSong();

        // hàm xử lí envent dom
        this.handleEvents();
        //render 
        this.render();
    }

}
app.start()

