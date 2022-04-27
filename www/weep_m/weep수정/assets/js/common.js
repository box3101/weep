window.addEventListener('DOMContentLoaded', function () {

  gnb();
  $('.qa-list').filter(function () { qaToggle() });

  // 비밀번호 텍스트로 보기
  $('.f-pw .btn-eye').on('click', function () {
    var $input = $(this).prev().prev('input');
    $input.toggleClass('active');

    if ($input.hasClass('active')) {
      $(this).addClass('active');
      $input.attr('type', "text");
    } else {
      $(this).removeClass('active');
      $input.attr('type', "password");
    }
  });

})

// 커스텀 셀렉트
function selectbox(target) {
  var select_name = target.options[target.selectedIndex].text;

  target.nextElementSibling.innerHTML = select_name;
}

//스크롤탭
function tabmenuActive() {
  var menu = document.querySelector('.tabmenu'),
    cont = document.getElementsByClassName('tab-content');
  tabmenu(menu, cont)
}
function tabmenu(menu, cont) {
  var tabMenu = menu.querySelectorAll('li');

  for (i = 0; i < tabMenu.length; i++) {
    tabMenu[i].addEventListener('click', clickTab);
    tabMenu[i].addEventListener('click', tab_scroll);
  }
  function clickTab(e) {
    for (var j = 0; j < cont.length; j++) {
      tabMenu[j].classList.remove('active');
      cont[j].classList.remove('active');
    }
    var contentId = e.currentTarget.getAttribute('data-tab');
    e.currentTarget.classList.add('active');
    document.getElementById(contentId).classList.add('active');
  }
}
function tab_scroll() {
  $('.tabmenu ul').each(function () {
    var wid = $(this).width(),
      num = $(this).find('li').length,
      idx = $(this).find('.active').index();

    $('.tabmenu ul').scrollLeft((wid / num) * idx);
  })
}

//전체메뉴
function gnb() {
  var btnGnb = document.querySelector('.btn-gnb'),
    gnb = document.querySelector('.gnb'),
    depth1 = gnb.querySelectorAll('.depth1'),
    btnClose = document.querySelector('.gnb-box').querySelector('.btn-close');

  depth1.forEach(function (el) {
    el.addEventListener('click', toggleAccordion);
  });

  function toggleAccordion(el) {
    var submenu = el.currentTarget.nextElementSibling.classList;
    var target = el.currentTarget;

    if (submenu.contains('show')) {
      submenu.remove('show');
      target.classList.remove('on');

    } else {
      menuClose();
      submenu.add('show');
      target.classList.add('on');
    }
  }

  btnGnb.addEventListener('click', function () {
    gnbShow();
    dimShow();

    document.querySelector('.dim').addEventListener('click', function () {
      dimHide();
      gnbHide();
      menuClose();
    })
  })

  btnClose.addEventListener('click', function () {
    gnbHide();
    dimHide();
  })
}
function menuClose() {
  depth1 = document.querySelectorAll('.depth1');
  depth2 = document.querySelectorAll('.depth2');

  depth1.forEach(function (el) {
    el.classList.remove('on');

    depth2.forEach(function (el) {
      el.classList.remove('show')
    })
  })
}
function gnbHide() {
  document.body.classList.remove('gnb-open');
}
function gnbShow() {
  document.body.classList.add('gnb-open');
}
function dimHide() {
  var dim = document.querySelector('.dim');
  document.body.removeChild(dim)
}
function dimShow() {
  div = document.createElement('div');
  document.body.appendChild(div).classList.add('dim');
}

//q&a내용 토글
function qaToggle() {
  $('.question').click(function () {
    $('.question').not($(this).toggleClass('on')).removeClass('on');
    $('.answer').not($(this).next('.answer').stop().slideToggle(400)).stop().slideUp();

  })
}

//레이어팝업
function popup_show(id) {
  $('.popup-wrap').addClass('active');
  $(id).addClass('active');
}

function popup_hide(e) {
  var $target = $(e);

  if ($target !== null) {
    $target.closest('.popup').removeClass('active');
    $target.closest('.popup-wrap').removeClass('active');
  }
  return false;
}




