export const initSelectionSlider = () => {
    $(".rosa-selection-slider-inner").owlCarousel({
        margin: 21,
        autoWidth: true,
        smartSpeed: 500,
        animateIn: 'ease-out',
        animateOut: 'ease-out',
        loop: true,
        dots: false,
    });

    var owl = $(".rosa-selection-slider-inner");
    owl.owlCarousel();
    $(".rosa-selection-slider-header-nav-arrow-next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".rosa-selection-slider-header-nav-arrow-prev").click(function () {
      owl.trigger("prev.owl.carousel");
    });
}


