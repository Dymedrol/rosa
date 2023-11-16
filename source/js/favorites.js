export const initFavorites = () => {

    const pdp = $('.rosa-pdp');

    if (!pdp.length) {
        return
    }

    const addToFavoritesButton = $('.js-add-to-favorites');
    const goToFavoritesButton = $('.js-go-to-favorites');
    const mobileFavCount = $('#mobile-fav-count');

    let favoritesArray;

    if (localStorage.getItem("favorites")) {
        favoritesArray = JSON.parse(localStorage.getItem("favorites"));
    }

    if (!favoritesArray) {
        favoritesArray = [];
    }

    if (favoritesArray.includes(window.location.pathname + window.location.search)) {
        addToFavoritesButton.hide();
        goToFavoritesButton.text(favSuccessText).css('display', 'block');
    }

    function changeProductInFavorites(productPath) {

        let favoritesArray;

        if (localStorage.getItem("favorites")) {
            favoritesArray = JSON.parse(localStorage.getItem("favorites"));
        }

        if (!favoritesArray) {
            favoritesArray = [];
        }


        let updateFavorites = function (favoritesArray) {
            localStorage.setItem("favorites", JSON.stringify(favoritesArray));
        }

        if (jQuery.inArray(productPath, favoritesArray) >= 0) {
            favoritesArray = favoritesArray.filter(function(elem){
               return elem != productPath;
            });
            updateFavorites(favoritesArray);
        } else {
            favoritesArray.push(productPath);
            updateFavorites(favoritesArray);
        }


        mobileFavCount.text(favoritesArray.length);
        addToFavoritesButton.hide();
        goToFavoritesButton.text(favSuccessText).css('display', 'block');
    }

    addToFavoritesButton.click(function() {
        const pathName = window.location.pathname;
        const queryString = window.location.search;
        changeProductInFavorites(pathName + queryString);
    });
}


