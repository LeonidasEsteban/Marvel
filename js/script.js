const mobileOpen = ()=>{
    console.log('Abre menu');
 }

const menu = document.getElementById('mobile-menu');
menu.addEventListener("click", mobileOpen);

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

