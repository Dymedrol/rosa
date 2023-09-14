export const initCollectionSlider = () => {
    $(".rosa-collection-slider-inner").owlCarousel({
        margin: 0,
        autoWidth: true,
        smartSpeed: 500,
        animateIn: 'ease-out',
        animateOut: 'ease-out',
        loop: true,
        dots: false,
    });

    var owl = $(".rosa-collection-slider-inner");
    owl.owlCarousel();
    $(".rosa-collection-slider-header-nav-arrow-next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".rosa-collection-slider-header-nav-arrow-prev").click(function () {
      owl.trigger("prev.owl.carousel");
    });
}


