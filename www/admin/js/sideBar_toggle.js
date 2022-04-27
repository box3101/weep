$(document).ready(function(){
    $(function(){
        var duration = 300;

        var $side = $('#sidebar');
        var $cont = $('#contents');
        var $togBtn = $('#sidebarCollapse');
        var $head = $('#header')
        var $GNB = $head.find('#adminGnb');


        var $sidebt = $side.find('button').on('click', function(){
            $side.toggleClass('close');

            if($side.hasClass('close')) {
                $head.find('.adminLogo').css('position','absolute')
                $head.find('.adminLogo').stop(true).animate({left:'-275px'}, duration);
                $GNB.css('position','absolute');
                $GNB.css('left','275px');
                $GNB.stop(true).animate({left:'48px'}, duration);
                $side.find('.nav_side').stop(true).animate({left:'-230px'}, duration);
                $cont.stop(true).animate({left:'-230px'}, duration);
                $togBtn.addClass('active');
            }
            else{
                $head.find('.adminLogo').stop(true).animate({left:'0px'}, duration);
                $GNB.stop(true).animate({left:'275px'}, duration);
                $side.find('.nav_side').stop(true).animate({left:'0px'}, duration);
                $cont.stop(true).animate({left:'0px'}, duration);
                $togBtn.removeClass('active')
                $head.find('.adminLogo').css('position','relatvie')
                $GNB.css('position','relative');
            };
        });
    });
});