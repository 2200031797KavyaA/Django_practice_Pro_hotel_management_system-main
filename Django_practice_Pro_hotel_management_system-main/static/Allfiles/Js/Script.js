$(function () {
    //slide part js
    $('.late').textillate({
        loop: true,
        minDisplayTime: 3000,
        initialDelay: 1000,
        in: {
            effect: 'bounceInDown',
            delayScale: 2,
        },
        out: {
            effect: 'bounce',
            delayScale: 1,
            shuffle: true,
        },
    });
    
    //slide part js
    $('#slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '.pre_btn',
        nextArrow: '.next_btn',
    });

    //Book A Table Area js
    $('.Check_in ').datetimepicker({
        formatTime: 'H:i:i',
        formatDate: 'd.m.Y',
        theme: 'dark',
        step: 30,
        hours12: false,
    });
    $('.open').click(function () {
        $('.Check_in').datetimepicker('show');
    });
 
    $('.Check_out ').datetimepicker({
        formatTime: 'H:i:i',
        formatDate: 'd.m.Y',
        theme: 'dark',
        step: 30,
        hours12: false,
        
    });
    $('.open1').click(function () {
        $('.Check_out').datetimepicker('show');
    });
    // about part js
  $(".video_btn").modalVideo({
    theme: 'dark',
    });
  // EXPLOR OUR ROOMS js
    $('.room_slide').slick({
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow:3,
        slidesToScroll:2,
        dots: true,
        arrows:false
    });
  //OUR AWESOME SERVICES js
    
    $('#example').tabs({
        delay: 500,
    });

   //OUR GALLERY js
    $('.gallary_overly').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
      tPrev: 'Gallery_pre', 
      tNext: 'Gallery_next', 
    },
    });

    $('.GALLERY_slider').slick({
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow:4,
        slidesToScroll:2,
        dots: true,
        arrows:false
    });

      //Our Special Staff Part start
     $('.Staff_slider').slick({
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow:4,
        slidesToScroll:2,
        dots: true,
        arrows:false
    });
   
   //counter part js
    $('.counter').counterUp({
      delay:5,
      time: 1000,
      });  
 
 
});