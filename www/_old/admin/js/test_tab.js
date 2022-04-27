jQuery(document).ready(function() {

    $('#tabs > div').hide();
    $('#tabs div:first').fadeIn();
    $('#tabs ul li:first').addClass('active');
    $('#tabs > ul li a').click(function(){
        $('#tabs ul li.active').removeClass('active');  
        $(this).parent().addClass('active');
        var selectedTab=$(this).attr('href');
        $('#tabs > div').fadeOut('fast', function() {       
            $(selectedTab).delay(10).fadeIn('fast');         
        });        
        return false;
    });

    $('#tabs-depth > div').hide();
    $('#tabs-depth div:first').fadeIn();
    $('#tabs-depth ul li:first').addClass('active');
    $('#tabs-depth ul li a').click(function(){
        $('#tabs-depth ul li.active').removeClass('active');  
        $(this).parent().addClass('active');
        var selectedTab=$(this).attr('href');
        $('#tabs-depth > div').fadeOut('fast', function() {       
            $(selectedTab).delay(10).fadeIn('fast');         
        });        
        return false;
    });

    $('#tabs-depth02 > div').hide();
    $('#tabs-depth02 div:first').fadeIn();
    $('#tabs-depth02 ul li:first').addClass('active');
    $('#tabs-depth02 ul li a').click(function(){
        $('#tabs-depth02 ul li.active').removeClass('active');  
        $(this).parent().addClass('active');
        var selectedTab=$(this).attr('href');
        $('#tabs-depth02 > div').fadeOut('fast', function() {       
            $(selectedTab).delay(10).fadeIn('fast');         
        });        
        return false;
    });

});