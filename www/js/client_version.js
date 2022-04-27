window.onload = function () {
    var version = navigator.userAgent;
    console.log(version);

    //ie11이하
    if (/trident/i.test(version)) {
      this.document.body.classList.add('oldIE');
       function forIE() {
                  var t = $('.target'), // 이미지 태그 
                  s = 'url(' + t.attr('src') + ')', // 이미지 태그의 src를 가져옴.
                  p = t.parent(), // 부모 컨테이너 '.img-container'
                  d = $('<div class="backGround"></div>'); // div를 하나 만듦.
                  t.hide(); //이미지는 숨기고.
                  p.append(d); //부모div에 생성한 div를 붙임.
                  d.css({
                  'height'                : 82,          
                  'background-size'       : 'contain',           
                  'background-repeat'     : 'no-repeat',          
                  'background-position'   : 'center',     
                  'background-image'      : s 
                  }); 
            }
       forIE();
        var swiper2 = new Swiper('#ad_swiper', {
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            autospeed: 2000,
            speed: 1000,
            centeredSlides: true,
            spaceBetween: 20,
            grabCursor: true,
            autoplay: true,
            loop: true,
            slidesPerView: '5', //한화면에 보이는 슬라이드갯수
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1180: {
                    slidesPerView: 'auto',
                },
            }

        });
    }

    //ie dege
    if (/edge/i.test(version)) {
        this.document.body.classList.add('edge');
    }

    //chrome
    if (/chrome/i.test(version) && !/edge/i.test(version)) {
        this.document.body.classList.add('chrome');
       
  

    }

    //firefox
    if (/firefox/i.test(version)) {
        this.document.body.classList.add('moz');
    }

    //opera
    if (/firefox/i.test(version)) {
        this.document.body.classList.add('opera');
    }

    //mobile
    if (/mobile/i.test(version)) {
        this.document.body.classList.add('mobile');
        this.location.href = "http://www.naver.com";
    }
}

