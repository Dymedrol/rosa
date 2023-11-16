export const initMenu = () => {
    const burgerButton = $('#burger');
    const mobileMenu = $('.rosa-menu-mobile');
    const closeButton = $('.rosa-menu-mobile-header-close');
    const mobileButtons = $('.js-mobile-arrow');
    const openMenumobileBackButton = $('.rosa-menu-open-header-back');
    const openMenumobileBackClose = $('.rosa-menu-open-header-close');
    const desktopButtons = $('.rosa-menu-nav-item_arrow');
    const openMenus = $('.rosa-menu-open');
    const mobileFavCount = $('#mobile-fav-count');

    let favoritesArray;

    if (localStorage.getItem("favorites")) {
        favoritesArray = JSON.parse(localStorage.getItem("favorites"));
    }

    if (!favoritesArray) {
        favoritesArray = [];
    }

    mobileFavCount.text(favoritesArray.length)

    burgerButton.click(function() {
        mobileMenu.show();
    });

    closeButton.click(function() {
        mobileMenu.hide();
    });

    mobileButtons.click(function() {
        const dataIndex = $(this).attr('data-button-undex');
        $(`#data-open-menu-index-` + dataIndex).addClass('open');
    });

    openMenumobileBackButton.click(function() {
        $('.rosa-menu-open').removeClass('open');
    });

    openMenumobileBackClose.click(function() {
        $('.rosa-menu-open').removeClass('open');
        mobileMenu.hide();
    });

    desktopButtons.click(function() {
        const dataIndex = $(this).attr('data-button-undex');
        const openMenu = $(`#data-open-menu-index-` + dataIndex);

        if (openMenu.hasClass('open')) {
            $('.rosa-menu-open').removeClass('open');
            return
        }

        $('.rosa-menu-open').removeClass('open');
        openMenu.addClass('open');
    });

    $('.rosa-menu-open').click(function(e) {
        if ($(e.target).hasClass('rosa-menu-open-shadow')) {
            $(this).removeClass('open');
        }
    })
}


