export const initJumboSlider = () => {

    if (typeof jumbotronSettings === 'undefined') {
        return
    }

    $(".rosa-jumbotron-slider").owlCarousel({
        margin: 0,
        items: 1,
        autoHeight: false,
        dots: true,
        autoplay: jumbotronSettings.autoplay,
        autoplayTimeout: jumbotronSettings.autoplayTimeout * 1000,
        loop: jumbotronSettings.loop,
        autoplaySpeed: 1300,
    });
}


