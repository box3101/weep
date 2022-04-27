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
	});



	// mCustomScroll
	$(".pro_skill .pro_skill-detail-sel, .nano2").mCustomScrollbar({
		theme: "minimal-dark",
		scrollInertia:800
	});



	// 맞춤검색 
	$(document).on("click",".sch_tab > dt > a",function(){
		if ($(this).parents(".sch_tab").hasClass("on")) {
			$(this).parents(".sch_tab").removeClass("on");
		} else {
			$(".sch_tab").removeClass("on");
			$(this).parents(".sch_tab").addClass("on");
		}

	}); 


	


	//$(".depth2_wrap ul, .depth3_cont").hide();
	$(document).on("click",".ly_cont .cate_cont > ul .item label",function(){
		$(".sch_tab").removeClass("on");
		//$(".depth2_wrap ul").hide();
		//$(".depth3_cont, .depth3_cont ul").hide();
		$(this).each(function(){
			var thisIdx = $(this).parents("li").index();
			$(this).parents(".sch_tab").addClass("on");
			
			// console.log(thisIdx , "<<< 첫번째 리스트의 인덱스");
			$(".depth2_wrap ul").eq(thisIdx).show();


		});
	});


	/*
	$(document).on("click",".ly_sub .depth2_cont > ul .item label",function(){
		$(".sch_tab").removeClass("on");
		$(".depth3_cont, .depth3_cont ul").hide();
		$(this).each(function(){
			var thisIdx = $(this).parents("li").index();
				thisId = $(this).siblings().attr("id");
				slicedId = thisId.slice(0, 8);
			//console.log(thisId, slicedId, "thisIdx >>> ", thisIdx);
			$(this).parents(".sch_tab").addClass("on");

			$("#"+slicedId+"_box").show();
			$("#"+slicedId+"_box > ul").eq(thisIdx).show();

			// console.log(thisIdx , "<<< 두번째 리스트의 인덱스")
		});
	});

		*/

	// click event
	$(".chk_wrap > .chkAll").prop("checked", false);
	$(document).on("click",".chk_wrap > .chkAll",function(){
		var thisChk = $(this).prop("checked");
			thisName = $(this).attr("name");
		
		if (thisChk == true) {
			$("input[name="+thisName+"]").prop("checked", true);
		} else {
			$("input[name="+thisName+"]").prop("checked", false);
		}
	});



	// 2020-12-30 main index freelancer information card hover events
	$(".project_cnt").mouseenter(function(){
		$(this).parents("li").find(".project_wNum_list").show();
	});
    $(".project_cnt").parents("li").mouseleave(function(){
        $(this).find(".project_wNum_list").hide();
	});
    /*
	$(".project_wNum_list").mouseleave(function(){
		$(".project_wNum_list").hide();
	});
    */





	

	// 2021-01-22 프로젝트 검색 - 최신순 화살표 { ============================================

	$(document).on("click","div.sch_menu div.lef ul li a",function(){
		
		$(this).parent().each(function(){
			$("div.sch_menu div.lef ul li").removeClass("on");

			$(this).addClass("on");
			if ($(this).hasClass("on")) {
				$(this).toggleClass("down")
			} else {
				
				$(this).addClass("on");	
			}

			
		});
	});


	
    // } 2021-01-22   ============================================


    

  });


}
