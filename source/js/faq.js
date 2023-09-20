export const initFaq = () => {
    const accordionHeaders = $('.rosa-faq-item-header');

    accordionHeaders.click(function() {
        const accordion = $(this).closest('.rosa-faq-item');
        accordion.find('.rosa-faq-item-header-text').slideToggle();
        accordion.toggleClass('open');

    });
}


