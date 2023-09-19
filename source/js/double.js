export const initDouble = () => {
    const accordionHeaders = $('.rosa-double-accordion-header');

    accordionHeaders.click(function() {
        const wrapper = $(this).closest('.rosa-double-info-inner');
        const accordion = $(this).closest('.rosa-double-accordion');

        if (accordion.hasClass('open')) {
          accordion.toggleClass('open');
          accordion.find('.rosa-double-accordion-header-text').slideToggle();
          return
        }

        wrapper.find('.rosa-double-accordion').removeClass('open');
        wrapper.find('.rosa-double-accordion-header-text').hide('fast');
        accordion.toggleClass('open');
        accordion.find('.rosa-double-accordion-header-text').slideToggle();

    });
}


