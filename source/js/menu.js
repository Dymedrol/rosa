export const initMenu = () => {
    const burgerButton = $('#burger');
    const mobileMenu = $('.rosa-menu-mobile');
    const closeButton = $('.rosa-menu-mobile-header-close');

    burgerButton.click(function() {
        mobileMenu.show();
    });

    closeButton.click(function() {
        mobileMenu.hide();
    });
}


