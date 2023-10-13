export const initHorizontalSlider = () => {
    const horizontalSlider = $('.rosa-horizontal-slider');

    if (!horizontalSlider.length) {
        return
    }

    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        spaceBetween: 12,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

    $(".rosa-horizontal-slider-mobile-carousel").owlCarousel({
        margin: 20,
        autoWidth: true,
        dots: false,
    });

    var owl = $(".rosa-horizontal-slider-mobile-carousel");
    owl.owlCarousel();
    $(".rosa-horizontal-slider-mobile-nav-arrow-next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".rosa-horizontal-slider-mobile-nav-arrow-prev").click(function () {
      owl.trigger("prev.owl.carousel");
    });
}


