var $naviBar;

/*인덱스 main JavaScript*/

$(document).ready(function () {
  initDOM();
  bindingEvent();

});

//DOM 초기화
function initDOM() {
}

//이벤트 바인딩
function bindingEvent() {

  // 탭공통

  $(function () {
    const menu = $(".custom_tabs");
    const menu_li = $(".custom_tabs li");
    const menu_li_a = $(".custom_tabs li a");
    const hidden = $(".hidden");

    $("#tab1").show();

    menu_li.on("click", function (e) {
      e.preventDefault();

      menu_li_a.removeClass("on");
      $(this).find("a").addClass("on");

      let target = $(this).find("a").attr("href");
      hidden.fadeOut();
      $(target).fadeIn(400);
    });
  });

  // 탭공통



  // 맞춤검색 직무선택시
  $(function () {
    $(".first_wrap .fisrtFloor_on").hide();
    $(".first_wrap .fisrtFloor_area").hide();

    $(".freelance .search_btn").on("click", function () {
      $(".freelance .firstFloor").find("dd").show();
      $(".freelance .fisrtFloor_on").hide();
    });

    $(".first_wrap .firstFloor").find("dt").on("click", function () {
      $(".firstFloor").find("dd").show();
      $(".fisrtFloor_on").hide();
      $(".fisrtFloor_area").hide();

    });

    // 직무클릭시
    $(".freelance .floor_click").on("click", function () {
      //$(".freelance .firstFloor").find("dd").hide();
      //$(".freelance .fisrtFloor_on").show();
      //$(".freelance .fisrtFloor_area").hide();
    });

    // 지역클릭시
    $(".first_wrap .floor_area_chk, .first_wrap .search-area a").on("click", function () {
      //$(".first_wrap .firstFloor").find("dd").hide();
      //$(".first_wrap .fisrtFloor_area").show();
    });



    // 프로젝트등록
    $(".processCotent .cProcessBox .cProcess li .cPBtnBox").on("click", function () {
      $(".processCotent .cProcessBox .cProcess li .cPBtnBox").removeClass("on");
      $(this).addClass("on");
    });

    $(".cPMethod li").on("click", function () {
      $(".cPMethod>li").removeClass("on");
      $(this).addClass("on");

      $(".cPMethod li").find("img").attr("src", "../../img/circle_icon.png");
      $(this).find("img").attr("src", "../../img/circle_icon2.png");
    });
    // 프로젝트등록

    // 프로젝트 기본정보

    var class_on = $(".content_info .proLnb li").hasClass("on");
    if (class_on) {
      $(".content_info .proLnb li.on").find("img").attr("src", "../../img/input_check_on.png");
    }
    // 프로젝트 기본정보
	
	$('#header .inner .login-util > li').click(function(){
		$(this).find('.member-menu').slideToggle(300);
	})

  });


}
