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
function openNav(menu) {
    menu.style.width = "100wh";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const $icon = $('#mobile-menu');
const $menu = $('#mySidenav');
const $closeBtn = $('.closebtn');
$icon.on('click', function(){
  if(!$menu.hasClass('active')) {
 		$menu.toggleClass('active').width("100%");
  
  }});

  $closeBtn.on('click', function(){
    if($menu.hasClass('active')) {
           $menu.removeClass('active').width("0%");
    }});
