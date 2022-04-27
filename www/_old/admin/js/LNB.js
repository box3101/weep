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
          $(this).addClass('noDepth');
        });
        
        function findChildren(obj) {
          return obj.find('> ul').length > 0;
        }
        
        $target.on('click','a', function(e){
            e.stopPropagation();
            var $this = $(this),
                $depthTarget = $this.next(),
                $siblings = $this.parent().siblings();
                $this.parent('li').find('ul li').removeClass('on');
                $siblings.removeClass('on');
                $siblings.find('ul').slideUp(250);
          
          if($depthTarget.css('display') == 'none') {
            _self.activeOn($this);
            $depthTarget.slideDown(_self.speed);
          } else {
            $depthTarget.slideUp(_self.speed);
            _self.activeOff($this);
            $('.noDepth').parent().slideUp(_self.speed);
          }
          if( $this.parent('.twoList').hasClass('on') ){
            $('.depth_adBox').slideDown(300);
          } else{
            $('.depth_adBox').slideUp(300);
          }
          
        })
        
      },
      activeOff : function($target) {
        $target.parent().removeClass('on');
      },
      activeOn : function($target) {
        $target.parent().addClass('on');
      }
    };
    
    
    // Call parent
    $(function(){
      depthCategory.click('#depthMenuBox li', 300)
    });
    
}(jQuery));