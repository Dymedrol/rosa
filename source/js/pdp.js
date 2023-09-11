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
    let selectedOptionsCount;

    selects.each(function() {
        selectedOptions[this.name] = this.value;
    });

    selectedOptionsCount = Object.keys(selectedOptions).length;

    selects.on('change paste keyup', function() {
        const selectedValue = this.value;
        selectedOptions[this.name] = selectedValue;

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
    });
}


