var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let burger = document.querySelector('.burger');
let nav = document.querySelector('.header-navbar');



let btn = $('.form-btn')
let overlay = $('.overlay')
let close = $('.popup-close')
let phone = $('#tel')

btn.on('click',  function () {
overlay.fadeIn('slow')
})

close.on('click', () => {
    overlay.fadeOut('slow')
})

phone.inputmask("+\\9\\96(999)99-99-99")


burger.addEventListener('click',  () => {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
});

