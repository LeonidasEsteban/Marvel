/*
Codigo jquery carousel
*/
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
  });

// Menu mobile
const $icon = $('#mobile-menu');
const $menu = $('#mySidenav');
const $closeBtn = $('.closebtn');
$icon.on('click', function(){
  if(!$menu.hasClass('activeMenu')) {
     $menu.addClass('activeMenu');
     setTimeout(() => {
      $('body').css("overflow-y", "hidden");
     }, 450);
    
  }});

  $closeBtn.on('click', function(){
    if($menu.hasClass('activeMenu')) {
           $menu.removeClass('activeMenu');
           setTimeout(() => {
            $('body').css("overflow-y", "auto");
           }, 100);
    }});
