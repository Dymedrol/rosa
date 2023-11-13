export const initAccountPage = () => {
    const accountPage = $('.rosa-account');

    if (!accountPage.length) {
        return
    }

    const fullPath = window.location.href;

    if (fullPath.includes('info')) {
        $('.rosa-account_mobile-info').css('display', 'block');
        $('.rosa-account-main-inner-info').css('display', 'block');
        $('.js-info').addClass('rosa-account-side-menu-item_active');
    } else if (fullPath.includes('commandes')) {
        $('.rosa-account_mobile-commandes').css('display', 'block');
        $('.rosa-account-main-inner-commandes').css('display', 'block');
        $('.js-commandes').addClass('rosa-account-side-menu-item_active');
    } else {
        $('.rosa-account_mobile-main').css('display', 'block');
        $('.rosa-account-main-inner-info').css('display', 'block');
        $('.js-info').addClass('rosa-account-side-menu-item_active');
    }


// rosa-account-side-menu-item_active
}


