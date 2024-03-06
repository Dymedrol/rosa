import moment from 'moment';

export const initPdp = () => {
    moment.locale('fr');
    const pdp = $('.rosa-pdp');

    if (!pdp.length) {
        return
    }
    const daysAvailable = 10;
    const daysUnavailable = 49;
    const form = pdp.find('form');
    const mainSelect = form.find('.js-main-select');
    const mainOptions = mainSelect.find('option');
    const optionItems = $('.rosa-pdp-select-wrapper');
    const selects = form.find('.js-pdp-select');
    const selectedOptions = {};
    selects.each(function() {
        selectedOptions[this.name] = this.value;
    });
    const selectedOptionsCount = Object.keys(selectedOptions).length;
    const deliveryText = $('.rosa-pdp-info-text2 b');
    const submitBtn = $('.rosa-pdp-info-button');
    const favBtn = $('.js-add-to-favorites');

    deliveryText.text(moment().add('days', daysAvailable).format('D MMMM'));

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const entries = urlParams.entries();

    const updateMainInput = function(value, name, isOnLoad) {
        const selectedValue = value;
        selectedOptions[name] = selectedValue;

        if (!isOnLoad) {
            const url = new URL(location);
            url.searchParams.set(name, value);
            history.replaceState({}, "", url);
        }

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

                const inventory_quantity = Number(mainSelect.find('option[value="' + optionId + '"]').attr('data-available'));
                let newDate;

                if (inventory_quantity >= 1) {
                    // + 10
                    newDate = moment().add('days', daysAvailable).format('D MMMM');
                } else {
                    // + 49
                    newDate = moment().add('days', daysUnavailable).format('D MMMM');
                }

                deliveryText.text(newDate);
            }
        });

        let selectedInputs = 0;
        optionItems.each( function( index, element ){
            if ($(this).hasClass('js-selected')) {
                selectedInputs++;
            }
        });

        if (selectedInputs == selectedOptionsCount) {
            submitBtn.removeClass('js-disabled');
            favBtn.removeClass('js-disabled');
        }
    }

    for (const entry of entries) {
        const wrapper = $(`select[name="${entry[0]}"]`).closest('.rosa-pdp-select-wrapper');
        wrapper.addClass('js-selected');
        wrapper.find('.rosa-pdp-info-controls-item span').text(entry[1]);
        wrapper.find('select').val(entry[1]);
        updateMainInput(entry[0], entry[1], true);
    }

    $('.rosa-pdp-info-controls-item').click(function() {
        const wrapper = $(this).closest('.rosa-pdp-select-wrapper');
        wrapper.find('.rosa-pdp-info-controls-item-menu').toggle();
    });

    $('.rosa-pdp-info-controls-item-menu').click(function(event) {
        const target = $(event.target);
        const wrapper = target.closest('.rosa-pdp-select-wrapper');
        const warning = wrapper.find('.rosa-pdp-info-controls-item-warning');
        const selectedName = wrapper.find('select').attr("name");

        if (target.hasClass("rosa-pdp-info-controls-item-menu-el")) {
            wrapper.addClass('js-selected');
            const selectedValue = $(event.target).text();
            wrapper.find('.rosa-pdp-info-controls-item span').text(selectedValue);
            wrapper.find('select').val($(event.target).attr('data-value'));
            warning.remove();
            updateMainInput(selectedValue, selectedName);
            $(this).hide();
        }
    });

    submitBtn.click(function(e) {
        if ($(this).hasClass('js-disabled')) {
            e.preventDefault();
            $('.rosa-pdp-info-controls').addClass('rosa-pdp-info-controls_show-warnings');
        }
    });

    favBtn.click(function(e) {
        if ($(this).hasClass('js-disabled')) {
            e.preventDefault();
            $('.rosa-pdp-info-controls').addClass('rosa-pdp-info-controls_show-warnings');
        }
    });


    const container = document.getElementById("myCarousel");

    const options = {
      Dots: false,
      Thumbs: {
        type: "classic",
      },
    };

    new Carousel(container, options, { Thumbs });
}


