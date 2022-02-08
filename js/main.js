$(function () {
    //count up
    $('.counter').countUp();
    //comment carousel
    $('.sect-review .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            575.98: {
                items: 2
            },
            767.98: {
                items: 3
            },
            991.98: {
                items: 1
            }
        }
    })
    //client carousel
    $('.sect-client .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            575.98: {
                items: 2
            },
            767.98: {
                items: 3
            },
            991.98: {
                items: 3
            },
            1200: {
                items: 6
            }
        }
    })
});

//menu scroll event
window.addEventListener('scroll',(event) => {
    var menu = document.getElementById("main-menu");
    var brand = document.getElementById("img-brand");
    if(document.documentElement.scrollTop > 100){
        menu.classList.add("roll-active");
        brand.classList.add("roll-active");
    }
    else{
        menu.classList.remove("roll-active");
        brand.classList.remove("roll-active");
    }
});