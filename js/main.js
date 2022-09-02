$(document).ready(function(){

    $('.card-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        verticalScroll:true,
        arrows:true,
        dots:false,
        prevArrow:' <i class="fa fa-arrow-left pre-1" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-arrow-right pre-2" aria-hidden="true"></i>',
      });
});