export const initFavorites = () => {
    const addToFavoritesButton = $('.js-add-to-favorites');

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

        addToFavoritesButton.text(favSuccessText);
    }

    addToFavoritesButton.click(function() {
        const pathName = window.location.pathname;
        const queryString = window.location.search;

        changeProductInFavorites(pathName + queryString);
    });
}


