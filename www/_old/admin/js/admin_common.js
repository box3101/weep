
/*table에 text "번호"를 padding 값으로 고정*/
$(function () {

    $('th:contains("번호")').css({
        "padding": "0 5px"
    });
    $('th:contains("No")').css({
        "padding": "0 5px"
    })
    $('td>span:contains("확정")').css({
        "color": "#6876b5",
        "font-weight": "600"
    })
    $('td>span:contains("요청")').css({
        "color": "#d45050",
        "font-weight": "600"
    })
    $('td>span:contains("취소")').css({
        "color": "#d45050",
        "font-weight": "600"
    })
    $('td>span:contains("정지")').css({
        "color": "#d45050",
        "font-weight": "600"
    })
    $('td>span:contains("참석")').css({
        "color": "#f38f2e",
        "font-weight": "600"
    })

});

/*리스트 삭제*/
function deleteIMG(ths){
    var $ths = $(ths);

    $ths.parents(".board_imgList").remove();
}

/*레이어팝업*/
function view_layer(name){
    document.getElementById(name).style.display='block';
}
function close_layer(name){
    document.getElementById(name).style.display='none';
}

function SNB_depth(selector){

}

/*ALERT */
function confirm_cancle() {
    var confirm_cancle = confirm("프로젝트 지원건이 확인전이므로\n취소하실 수 있습니다\n\n취소하겠습니까?");

    if ( confirm_cancle == true ) {
        alert("프로젝트 지원이 취소되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function confirm_cancle02() {
    var confirm_cancle = confirm("삭제하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("삭제되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function confirm_cancle03() {
    var confirm_cancle = confirm("프로젝트 지원건이 확인전이므로\n취소하실 수 있습니다.\n\n취소하겠습니까?");

    if ( confirm_cancle == true ) {
        alert("온라인입사지원건이 취소되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function confirm_cancel04() {
    var confirm_cancle = confirm("계약을 취소 하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("계약 취소 처리되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function confirm_complete01() {
    var confirm_cancle = confirm("계약완료 처리 하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("계약 완료 처리 되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function confirm_alter01() {
    var confirm_cancle = confirm("㈜아이티최고 담당자를 박담당 (qkrwnekd)으로 변경하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("담당자가 변경완료되었습니다..");
    } else if ( confirm_cancle == false ) {
    }
}
function confirm_alter02() {
    var confirm_cancle = confirm("진행상태를 변경하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("변경완료되었습니다..");
    } else if ( confirm_cancle == false ) {
    }
}
function calculate_alter01() {
    var confirm_cancle = confirm("결제조건을 변경하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("변경완료되었습니다..");
    } else if ( confirm_cancle == false ) {
    }
}
function calculate_alter02() {
    var confirm_cancle = confirm("중개수수료를 변경하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("변경완료되었습니다..");
    } else if ( confirm_cancle == false ) {
    }
}
function calculate_alter03() {
    var confirm_cancle = confirm("프로젝트 지급일을 변경하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("변경완료되었습니다..");
    } else if ( confirm_cancle == false ) {
    }
}
function calculate_alter04() {
    var confirm_cancle = confirm("환불처리 하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("환불처리가 완료되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function charge_alter01() {
    var confirm_cancle = confirm("유료상품 노출기간을 변경하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("변경이 완료되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function charge_alter02() {
    var confirm_cancle = confirm("환불처리 하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("환불처리가 완료되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function charge_alter03() {
    var confirm_cancle = confirm("변경 하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("변경이 완료되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function charge_cancel01() {
    var confirm_cancle = confirm("유료상품 결제 취소를 하시겠습니까?");

    if ( confirm_cancle == true ) {
        alert("취소가 완료되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function charge_cancel02() {
    var confirm_cancle = confirm("매니저 정보를 삭제하시겠습니까??");

    if ( confirm_cancle == true ) {
        alert("정보삭제가 완료되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function charge_cancel03() {
    var confirm_cancle = confirm("삭제하시겠습니까??");

    if ( confirm_cancle == true ) {
        alert("삭제가 완료되었습니다.");
    } else if ( confirm_cancle == false ) {
    }
}
function formCheck(){
    var f = document.managerAlter;

    if(f.selectAlter.value == ''){
        alert("이동할 항목을 체크해주세요");
        f.selectAlter.focus();
        return false;
    }else{
        confirm("㈜아이티최고 외 3개 담당자를 박담당 (qkrwnekd)으로 변경하시겠습니까?");
    }
    return true;
}
/*WINDOW POPUP */
function openWindowPop(url, name) {
    var options = 'top=0, left=0, width=1260, height=800, status=no, menubar=no, toolbar=no, resizable=no scrollbars=1';
    window.open(url, name, options);
}



/* -------------------------------------------------- LNB --------------------------------------------------S-------------------------------------------------- */
(function ($){
  
    var depthCategory = {
      click : function (target, speed) {
        var _self = this,
            $target = $(target);
        _self.speed = speed || 300;
        
        $target.each(function(){
          if(findChildren($(this))) {
            return;
          }
        });
        
        function findChildren(obj) {
          return obj.find('> ul').length > 0;
        }
        
        $target.on('click','a', function(e){
            e.stopPropagation();
            var $this = $(this),
                $depthTarget = $this.next(),
                $siblings = $this.parent().siblings();
                $this.parent('li').find('ul li').removeClass('active');
                $siblings.removeClass('active');
                $siblings.find('ul').slideUp(250);
          
          if($depthTarget.css('display') == 'none') {
            _self.activeOn($this);
            $depthTarget.slideDown(_self.speed);
          } else {
            $depthTarget.slideUp(_self.speed);
            _self.activeOff($this);
          }
        })
        
      },
      activeOff : function($target) {
        $target.parent().removeClass('active');
      },
      activeOn : function($target) {
        $target.parent().addClass('active');
      }
    };
    
    
    // Call parent
    $(function(){
      depthCategory.click('.nav_side li', 300)
    });
    
}(jQuery));
/* -------------------------------------------------- LNB --------------------------------------------------E-------------------------------------------------- */