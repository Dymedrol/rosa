export const initRelatedSlider = () => {

    setTimeout(() => {
      $(".rosa-related-slider-custom-inner").owlCarousel({
          margin: 16,
          autoWidth: true,
          smartSpeed: 500,
          animateIn: 'ease-out',
          animateOut: 'ease-out',
          loop: true,
          dots: false,
      });

      var owl = $(".rosa-related-slider-custom-inner");
      owl.owlCarousel();
      $(".rosa-related-slider-header-nav-arrow-next").click(function () {
        owl.trigger("next.owl.carousel");
      });
      $(".rosa-related-slider-header-nav-arrow-prev").click(function () {
        owl.trigger("prev.owl.carousel");
      });
    }, "2000");
}


