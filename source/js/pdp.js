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
    const selectedOptionsCount = Object.keys(selectedOptions).length;

    const updateMainInput = function(value, name) {
        console.log('change', value, name)
        const selectedValue = value;
        selectedOptions[name] = selectedValue;
        console.log(selectedOptions)
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
                console.log('val 1', mainSelect.find('option:selected').val())
            }
        });
    }

    selects.each(function() {
        selectedOptions[this.name] = this.value;
    });

    // selects.on('change paste keyup', function() {
    //     alert('change')
    //     const selectedValue = this.value;
    //     selectedOptions[this.name] = selectedValue;

    //     mainOptions.each(function() {
    //         const text = $(this).text();
    //         const optionId = $(this).val();
    //         let coincidenceCount = 0;

    //         Object.keys(selectedOptions).forEach(key => {
    //           if (text.includes(selectedOptions[key])) {
    //             coincidenceCount++;
    //           }
    //         });

    //         if (coincidenceCount === selectedOptionsCount) {
    //             mainSelect.val(optionId);
    //         }

    //     });
    // });

    console.log(selectedOptions)

    $('.rosa-pdp-info-controls-item').click(function() {
        const wrapper = $(this).closest('.rosa-pdp-select-wrapper');
        wrapper.find('.rosa-pdp-info-controls-item-menu').toggle();
    });

    $('.rosa-pdp-info-controls-item-menu').click(function(event) {
        const target = $(event.target);
        const wrapper = target.closest('.rosa-pdp-select-wrapper');
        const selectedName = wrapper.find('select').attr("name");

        if (target.hasClass("rosa-pdp-info-controls-item-menu-el")) {
            // if (target.hasClass('laoli-pdp-mobile-info-buttons-sizes-menu-item_empty')) {
            //     status.text(madeToOrderText);
            //     addButton.val(addToCartText);
            // } else {
            //     status.text(inStockText);
            //     addButton.val(addToCartText);
            // }
            const selectedValue = $(event.target).text();

            wrapper.find('.rosa-pdp-info-controls-item span').text(selectedValue);
            wrapper.find('select').val($(event.target).attr('data-value'));
            updateMainInput(selectedValue, selectedName);
            $(this).hide();
        }
    });
}


