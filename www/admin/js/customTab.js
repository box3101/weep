$(document).ready(function(){
    initDOM('.tab_reg');
    bindingEvent();
});

var $tab;
var $btns;
var $boxs;
var speed;
var delay_speed;
var isAnimated; 

function initDOM(selector){
    $tab = $(selector);
    $btns = $tab.find('.proLnb').children('li').children('a');
    $boxs = $tab.find('.box');
    speed = 100;
    isAnimated = true; 
}

function bindingEvent(){
    $btns.on('click',function(e){
        e.preventDefault();
        var $this = $(this);
        var isOn = $this.hasClass('on');

        if(!isOn && isAnimated){
            activation($this);
            isAnimated = false;
        }
    });
}

function activation(item){
    console.log('You clicked!!!');
    var target = $(item).attr('href');
    $boxs.stop().hide().removeClass('on');
    $(target).stop().fadeIn(speed,function(){
        $(this).addClass('on');
        setTimeout(function(){
            isAnimated = true;
        });
    })

    $btns.removeClass('on');
    $(item).addClass('on');
}




// SNB
/*
$(document).on("click",".SNB li",function(){
	$(".SNB li").removeClass("on");
	$(this).addClass("on");
});
*/
