$(document).ready(function(){
  $(".clients__slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:2500,
    easing:'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2500,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
  })
  $('.about-us__slider').slick({
    slidesToShow: 4,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    speed:500,
    easing:'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2500,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: true,

    responsive: [
      {
          breakpoint: 1050,
          settings: {
            slidesToShow: 3,
          }
    },       {
      breakpoint: 530,
      settings: {
        centerMode: true,
      }
}
  ],
  })
});

$('#blog-link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#blog').offset().top }, 1500);
  e.preventDefault();
});

$('#services-link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#services').offset().top }, 1500);
  e.preventDefault();
});

$('#clients-link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#clients').offset().top }, 1500);
  e.preventDefault();
});

$('#contact-link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1500);
  e.preventDefault();
});
$('#about-us-link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#about-us').offset().top }, 1500);
  e.preventDefault();
});
$('#works-link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#works').offset().top }, 1500);
  e.preventDefault();
});



$(function(){
  $("#Container").mixItUp({
      selectors: {
        target:'.mix',
        filter:'.filter',
        sort:'.sort',
      },
      load: {
        filter:'.mix',
        sort:'myorder',
      },
      controls: {
        enable: true, 
        active:'on',
      },
      animation: {
        enable: true,
        effects: 'scale fade',
        duration: 250,
        // effects: 'rotateY fade',
        // effects: 'translateZ,X,Y', 
        // effects: 'stagger translateX',
      },
      // layout: {
      //   display:'inline-block',
      //   // containerClass:'list',
      // }   
    });     
});

$(document).ready(function(){
      $(".filter-btn").click(function(){
        $(".works__navbar .filter").slideDown(600);
      });
      // $(".filter-btn").click(function(){
      //   $(".works").css({"background-color":"#c0301c"});
      // });
    });

$(document).ready(function(){
    $('.header__burger').click(function(event){
      $('.header__burger, .home__nav').toggleClass('active');
      $('body').toggleClass('lock')
    });


    $('.home__nav a').click(function(event){
      $('body').removeClass('lock')
      $('.home__nav, .header__burger').removeClass('active');
    });
});