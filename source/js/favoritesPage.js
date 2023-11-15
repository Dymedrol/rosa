export const initFavoritesPage = () => {
    const favoritesPage = $('.rosa-favorites');
    const favoriteList = $('#favorites')

    if (!favoritesPage.length) {
        return
    }

    const template = $('#favorites-template');
    const emptyBlock = $('#empty');
    const countText = $('.rosa-favorites-header-count-text span');
    const removeAll = $('.rosa-favorites-header-remove-all');


    let favoritesArray;

    if (localStorage.getItem("favorites")) {
        favoritesArray = JSON.parse(localStorage.getItem("favorites"));
    }

    if (!favoritesArray) {
        favoritesArray = [];
        countText.text('0');
        removeAll.addClass('rosa-favorites-header-remove-all_disabled');
        emptyBlock.show();
    }

    let renderWishlistItems = function () {
        countText.text(favoritesArray.length);

        for (var i = 0; i < favoritesArray.length; i++) {
            const fullPath = favoritesArray[i];
            const path = favoritesArray[i].split('?')[0];
            jQuery.getJSON(path +'.js', function(product) {

                var item = template.html();
                item = $(item)
                item.attr('data-url', fullPath);
                item.find('.rosa-favorites-item-link').attr('href', fullPath);
                // item.attr('data-id', product.variants[0].id);
                item.find('.rosa-favorites-item-card-title').html(product.title);
                item.find('.rosa-favorites-item-card-text').html(product.vendor);
                var price = product.price.toString();
                var xx = price.length - 2;
                price = price.substring(0, xx) + "." + price.substring(xx, price.length)
                item.find('.rosa-favorites-item-card-price').html('€' + price);
                item.find('.rosa-favorites-item-card-pic').attr('src', product.images[0] + '&width=400');
                item.appendTo(favoriteList);

            } );
        }

        const removeButtons = favoriteList.find('.js-fav-remove');

        favoriteList.click(function(e) {
            const target = $(e.target);

            if (!target.hasClass('js-fav-remove')) {
                return
            }

            const item = target.closest('.rosa-favorites-item');
            const itemUrl = item.attr('data-url');

            favoritesArray = JSON.parse(localStorage.getItem("favorites"));
            favoritesArray = favoritesArray.filter(function(elem){
               return elem != itemUrl;
            });

            localStorage.setItem("favorites", JSON.stringify(favoritesArray));
            item.remove();

            if (favoritesArray.length) {
                countText.text(favoritesArray.length);
            } else {
                localStorage.setItem("favorites", []);
                countText.text('0');
                removeAll.addClass('rosa-favorites-header-remove-all_disabled');
                emptyBlock.show();
            }

        });
    }

    renderWishlistItems();

    removeAll.click(function() {
        localStorage.setItem("favorites", []);
        countText.text('0');
        favoriteList.empty();
        removeAll.addClass('rosa-favorites-header-remove-all_disabled');
        emptyBlock.show();
    });

}


