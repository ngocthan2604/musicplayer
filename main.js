var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// biến in dom
var playlist = $(".playlist");
var heading = $(".header__name-musis");
var cdThumd = $(".cd-thumb");
var audio = $(".audio");
var playBtn = $(".control-play");
var progress = $(".progress");
var next = $(".control-next");
var pre = $(".control-pre");
var repeat = $(".control-repeat");
var random = $(".control-random");

const app = {
  currentIndex: 0,
  isplaying: false,
  israndom: false,
  isrepeat: false,

  songs: [
    {
      name: "Kiếp",
      singer: "Vương Vũ Đồng",
      path: "./assets/audio/song1.mp3",
      image: "https://i.ytimg.com/vi/rURwrklaWvE/maxresdefault.jpg",
    },
    {
      name: "Vây Giữ",
      singer: "Vương Tĩnh Văn",
      path: "./assets/audio/song2.mp3",
      image: "https://i.ytimg.com/vi/G_fVwdpLKZ4/maxresdefault.jpg",
    },
    {
      name: "Mộng Phồn Hoa",
      singer: "Hoàng Linh",
      path: "./assets/audio/song3.mp3",
      image: "https://i.ytimg.com/vi/i_T3KuW3sfY/maxresdefault.jpg",
    },
    {
      name: "Đào Hoa Nặc",
      singer: "G.E.M",
      path: "./assets/audio/song4.mp3",
      image: "https://i.ytimg.com/vi/48NQGqzBLio/hqdefault.jpg",
    },
    {
      name: "Bất Nhiễm",
      singer: "Mao Bất Dịch",
      path: "./assets/audio/song5.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2019/05/02/d/4/7/3/1556786553828_640.jpg",
    },
    {
      name: "Đáy Biển",
      singer: "Nhất Chỉ Lưu Liên",
      path: "./assets/audio/song6.mp3",
      image: "https://i.ytimg.com/vi/ZKQDPty_Vtw/maxresdefault.jpg",
    },
    {
      name: "Nửa Đời Tuyết",
      singer: "Tưởng Tuyết Nhi",
      path: "./assets/audio/song7.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/mv/2021/05/28/7/9/c/b/1622203237442_640.jpg",
    },
    {
      name: "Ái Thương",
      singer: "Tiểu Thời & Gong Tuấn",
      path: "./assets/audio/song8.mp3",
      image: "https://i.ytimg.com/vi/ZwHhc-WGkFE/maxresdefault.jpg",
    },
    {
      name: "Hỏi",
      singer: "Đường Cổ",
      path: "./assets/audio/song9.mp3",
      image: "https://i.ytimg.com/vi/gZarvVkPJQY/maxresdefault.jpg",
    },
    {
      name: "Không Thán Hề",
      singer: "Ngạo Thất Gia",
      path: "./assets/audio/song10.mp3",
      image: "https://i.ytimg.com/vi/IOftXPJGHZU/maxresdefault.jpg",
    },
    {
      name: "Một Đường Nở Hoa",
      singer: "Ôn Dịch Tâm",
      path: "./assets/audio/song11.mp3",
      image: "https://i.ytimg.com/vi/S1ElLh_hf3k/maxresdefault.jpg",
    },
    {
      name: "Nổi Gió Rồi",
      singer: "Châu Thâm",
      path: "./assets/audio/song12.mp3",
      image:
        "https://chuandaura.org/wp-content/uploads/2021/04/Noi-gio-roi-%E8%B5%B7%E9%A3%8E%E4%BA%86-e1619766641155.jpg",
    },
    {
      name: "Thiếu Niên",
      singer: "Mộng Nhiên",
      path: "./assets/audio/song13.mp3",
      image:
        "https://tiengtrunghsk.vn/wp-content/uploads/2021/01/thieu-nien-1.jpg",
    },
    {
      name: "Là anh",
      singer: "Mộng Nhiên",
      path: "./assets/audio/song14.mp3",
      image:
        "https://i.ytimg.com/vi/oyCt8hWZbRY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDcgZShNMA8=&rs=AOn4CLDcfdcdUtJAPiqwiYafON90ngM_MA",
    },
    {
      name: "Cát Bụi",
      singer: "Vương Vũ Đồng",
      path: "./assets/audio/song15.mp3",
      image: "https://i.ytimg.com/vi/kkxgWAMRFLU/sddefault.jpg",
    },
    {
      name: "Thanh Ti",
      singer: "Đẳng Thập Yêu Quân",
      path: "./assets/audio/song16.mp3",
      image: "https://i.ytimg.com/vi/xQQHKCQqWS8/maxresdefault.jpg",
    },
    {
      name: "Quan Sơn Tửu",
      singer: "Đẳng Thập Yêu Quân",
      path: "./assets/audio/song17.mp3",
      image: "https://i.ytimg.com/vi/M6KC0C4aWbA/maxresdefault.jpg",
    },
    {
      name: "Đảo Không Người",
      singer: "Nhậm Nhiên",
      path: "./assets/audio/song18.mp3",
      image: "https://i.ytimg.com/vi/T69eUXSPLvI/maxresdefault.jpg",
    },
    {
      name: "Người Theo Đuổi Ánh Sáng",
      singer: "Gumin",
      path: "./assets/audio/song19.mp3",
      image: "https://i.ytimg.com/vi/pg9-W-Oh9i8/maxresdefault.jpg",
    },
    {
      name: "Tứ Ngã",
      singer: "Nhất Chỉ Bạch Dương",
      path: "./assets/audio/song20.mp3",
      image: "https://i.ytimg.com/vi/WQDgDHIrzUI/maxresdefault.jpg",
    },
    {
      name: "Cầu Bà Ngoại",
      singer: "Nhậm Nhiên",
      path: "./assets/audio/song21.mp3",
      image: "https://i.ytimg.com/vi/NdGjitGutis/maxresdefault.jpg",
    },
    {
      name: "Họa Tâm",
      singer: "Trương Lương Dĩnh",
      path: "./assets/audio/song22.mp3",
      image:
        "https://i.ytimg.com/vi/UXxSyWoFM-0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCUobywdWr2j8clL7KPdapEVWbJA",
    },
    {
      name: "Trích Tiên",
      singer: "Diệp Lý",
      path: "./assets/audio/song23.mp3",
      image:
        "https://i.ytimg.com/an_webp/jHV3bka9WCM/mqdefault_6s.webp?du=3000&sqp=CN-txKAG&rs=AOn4CLBtFtyJv_5RgpuxuNSRdp5Yo5ZBnA",
    },
    {
      name: "Cố Lí Phùng Xuân",
      singer: "A Nguyệt Nguyệt",
      path: "./assets/audio/song24.mp3",
      image:
        "https://i.ytimg.com/an_webp/xC7C5-xfuPI/mqdefault_6s.webp?du=3000&sqp=COidxKAG&rs=AOn4CLC0cf_tLEHv26ZH6Um1Ri-ZJIwTSw",
    },
    {
      name: "Thán Vân Hề",
      singer: "Cúc Tịnh Y",
      path: "./assets/audio/song25.mp3",
      image:
        "https://i.ytimg.com/an_webp/GawJLACHnTU/mqdefault_6s.webp?du=3000&sqp=CNiZxKAG&rs=AOn4CLDhR93ImCPe25wMjU4B5eNDNtXupA",
    },
    {
      name: "Yến Vô Hiết",
      singer: "Tương Tuyết Nhi",
      path: "./assets/audio/song26.mp3",
      image:
        "https://i.ytimg.com/vi/lNCViM7R8N8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5Clg9-QoGG0tryjt0dI9lnAG58w",
    },
    {
      name: "Xích Linh",
      singer: "Chấp Tố Hề",
      path: "./assets/audio/song27.mp3",
      image:
        "https://i.ytimg.com/vi/Ba0A_7RKc-k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrCyPg0kL_8S7BV_Hp_GeU5SUgMw",
    },
    {
      name: "Tay Trái Chỉ Trăng",
      singer: "Tát Đỉnh Đỉnh",
      path: "./assets/audio/song28.mp3",
      image:
        "https://i.ytimg.com/an_webp/ATPulcGQ2SE/mqdefault_6s.webp?du=3000&sqp=CNevxKAG&rs=AOn4CLBBBKLrwK0t-sbtMkR_1MCpaQiJRA",
    },
    {
      name: "Từ Cửu Môn Hồi Ức",
      singer: "Đẳng Thậm Ma Quan",
      path: "./assets/audio/song29.mp3",
      image:
        "https://i.ytimg.com/an_webp/NxEDFmqWFLo/mqdefault_6s.webp?du=3000&sqp=CLaMxKAG&rs=AOn4CLAaqPqYR58UklrlnTQw5cU7RsSCkg",
    },
    {
      name: "Ái Ngã",
      singer: "Bồ Đề",
      path: "./assets/audio/song30.mp3",
      image:
        "https://i.ytimg.com/vi/raFDdZfJiIM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKesl-Y1mYKt79LdkNGFHYzSnsZg",
    },
    {
      name: "Kết Thúc",
      singer: "Đổng Trinh",
      path: "./assets/audio/song31.mp3",
      image:
        "https://i.ytimg.com/vi/C3xAKIo9Wog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4Z36qH6i68ytoZKxEot2oUfWnKg",
    },
    {
      name: "Tam Thốn Thiên Đường",
      singer: "Nghiêm Nghệ Đan",
      path: "./assets/audio/song32.mp3",
      image:
        "https://i.ytimg.com/vi/Ex40VS7UX7I/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFYoUzAP&rs=AOn4CLDtAu-VJdcvKfkT0GhFF4aYA2emDQ",
    },
  ],

  //hàm định nghĩa các thuộc tính
  definedProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  //hàm xử lí các sự  kiện
  handleEvents: function () {
    var _this = this;

    //Event croll ẩn cd
    cd = $(".cd");
    cdWidth = cd.offsetWidth;

    document.onscroll = function () {
      var scroll = window.scrollY || document.documentElement.scrollTop;
      var newCdWidth = cdWidth - scroll;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Event play pause
    playBtn.onclick = function () {
      if (_this.isplaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    audio.onpause = function () {
      _this.isplaying = false;
      playBtn.classList.remove("playing");

      cdThumbAnimate.pause();
    };

    audio.onplay = function () {
      _this.isplaying = true;
      playBtn.classList.add("playing");

      cdThumbAnimate.play();
    };

    // Event tua và chạy thời gian song
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = Math.floor(progressPercent);
      }
    };

    // Event tua audio
    progress.onchange = function (e) {
      var seekTime = (e.target.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    };

    // Event cd quay rotate
    var cdThumbAnimate = cdThumd.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumbAnimate.pause();

    // Event next audio
    next.onclick = function () {
      if (_this.israndom) {
        _this.randomSong();
      } else {
        _this.nextSong();
        _this.loadCurrentSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Event Pre audio
    pre.onclick = function () {
      if (_this.israndom) {
        _this.randomSong();
      } else {
        _this.preSong();
        _this.loadCurrentSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Event repeat audio
    repeat.onclick = function () {
      _this.isrepeat = !_this.isrepeat;
      this.classList.toggle("active", _this.isrepeat);
    };
    // Event random audio
    random.onclick = function () {
      _this.israndom = !_this.israndom;
      this.classList.toggle("active", _this.israndom);
    };

    // Event audio kết thúc (ended)
    audio.onended = function () {
      if (_this.isrepeat) {
        audio.play();
      } else {
        next.onclick();
      }
    };

    // Event click vô playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");
      if (songNode || e.target.closest(".song-option")) {
        // xử lí khi click vô node
        if (songNode) {
          _this.currentIndex = parseInt(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.scrollToActiveSong();
          _this.render();
          audio.play();
        }

        //xử lí click vô option
        if (e.target.closest(".song-option")) {
          alert("Plese Login");
        }
      }
    };
  },

  //hàm hiện song đầu tiên
  loadCurrentSong: function () {
    heading.innerText = this.currentSong.name;
    cdThumd.style.backgroundImage = `url("${this.currentSong.image}")`;
    audio.setAttribute("src", `${this.currentSong.path}`);
  },

  //hàm render ra dom
  render: function () {
    var html = this.songs.map(function (song, index) {
      return `
                <div class="song ${
                  index === app.currentIndex ? "active" : " "
                }" " data-index ="${index}">
                    <div class="song-infor">
                        <div class="song-img" style="background-image: url('${
                          song.image
                        }');"></div>
                        <div class="song-desc">
                            <h2 class="song-title">${song.name}</h2>
                            <p class="song-singer">${song.singer}</p>
                        </div>
                    </div>
                    <div class="song-option">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            `;
    });
    return (playlist.innerHTML = html.join(""));
  },

  // hàm tiến lên bài sau
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex > this.songs.length - 1) {
      return (this.currentIndex = 0);
    }
  },

  // Hàm quay về bài trước
  preSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      return (this.currentIndex = this.songs.length - 1);
    }
  },

  // Hàm phát ngẫu nhiên
  randomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;

    this.loadCurrentSong();
  },

  // hàm hiển thị bài active lên view
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 300);
  },

  //hàm bắt đầu chạy
  start: function () {
    //định nghĩa các thuộc tính
    this.definedProperties();
    //load bài hiển thị đầu tiên
    this.loadCurrentSong();

    // hàm xử lí envent dom
    this.handleEvents();
    //render
    this.render();
  },
};
app.start();
