$('.review_carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText: ["<img src='./assets/left-arrow.png'/>", "<img src='./assets/left-arrow.png' style='transform:scaleX(-1);' />"],
    dots: false,
    autoplay:false,
    autoplayTimeout: 5000,
    slideSpeed: 500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        601:{
            items:2
        },
        1269:{
            items:3
        }
    }
})

$('.review_carousel2').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText: ["<img src='./assets/left-arrow.png'/>", "<img src='./assets/left-arrow.png' style='transform:scaleX(-1);' />"],
    dots: false,
    autoplay:false,
    autoplayTimeout: 5000,
    slideSpeed: 500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        601:{
            items:2
        },
        1269:{
            items:3
        }
    }
})

$(document).ready(function(){
    $('.menu_bar_box').on('click',function(){
        $('.mobile_sidebar').addClass('active');
    })
    $('.closebar').on('click',function(){
        $('.mobile_sidebar').removeClass('active');
    })
})