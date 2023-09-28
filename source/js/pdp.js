export const initPdp = () => {
    const pdp = $('.rosa-pdp');

    if (!pdp.length) {
        return
    }
    const form = pdp.find('form');
    const mainSelect = form.find('.js-main-select');
    const mainOptions = mainSelect.find('option');

    const selects = form.find('.js-pdp-select');
    const selectedOptions = {};
    selects.each(function() {
        selectedOptions[this.name] = this.value;
    });
    const selectedOptionsCount = Object.keys(selectedOptions).length;

    const setSubmitButtonStatus = function(isActive) {
        const submitButton = form.find('.rosa-pdp-info-button');

        if (isActive) {
            submitButton.prop('disabled', false);
            submitButton.val('Ajouter au panier');
        } else {
            submitButton.prop('disabled', true);
        }
    }

    const updateMainInput = function(value, name) {
        const selectedValue = value;
        selectedOptions[name] = selectedValue;


        mainOptions.each(function() {
            const text = $(this).text();
            const optionId = $(this).val();
            let coincidenceCount = 0;

            Object.keys(selectedOptions).forEach(key => {
              if (text.includes(selectedOptions[key])) {
                coincidenceCount++;
              }
            });

            if (coincidenceCount === selectedOptionsCount) {
                mainSelect.val(optionId);
            }
        });
    }


    $('.rosa-pdp-info-controls-item').click(function() {
        const wrapper = $(this).closest('.rosa-pdp-select-wrapper');
        wrapper.find('.rosa-pdp-info-controls-item-menu').toggle();
    });

    $('.rosa-pdp-info-controls-item-menu').click(function(event) {
        const target = $(event.target);
        const wrapper = target.closest('.rosa-pdp-select-wrapper');
        const selectedName = wrapper.find('select').attr("name");

        if (target.hasClass("rosa-pdp-info-controls-item-menu-el")) {
            const selectedValue = $(event.target).text();

            wrapper.find('.rosa-pdp-info-controls-item span').text(selectedValue);
            wrapper.find('select').val($(event.target).attr('data-value'));
            updateMainInput(selectedValue, selectedName);
            $(this).hide();
        }
    });
}


