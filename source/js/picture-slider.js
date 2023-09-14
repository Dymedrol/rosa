export const initPictureSlider = () => {
    $(".rosa-picture-slider-inner").owlCarousel({
        margin: 17,
        autoWidth: true,
        smartSpeed: 500,
        animateIn: 'ease-out',
        animateOut: 'ease-out',
        loop: true,
        dots: false,
    });

    var owl = $(".rosa-picture-slider-inner");
    owl.owlCarousel();
    $(".rosa-picture-slider-nav-arrow-next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".rosa-picture-slider-nav-arrow-prev").click(function () {
      owl.trigger("prev.owl.carousel");
    });
}


