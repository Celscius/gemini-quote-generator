const loaderContainer = document.getElementById('loader-container');
const mainContent = document.getElementById('app');

/**
 * display loading element and hide app element
 * @param {HtmlElement} [elemendId=loaderContainer] - id element for loading
 * @param {HtmlElement} [app=mainContent] - id element for app
 * @returns {void}
 */
export const displayLoading = ( loader = loaderContainer, app = mainContent ) => {
    loader.classList.remove('hidden');
    app.style.display = "none";
};

/**
 * display loading element and hide app element
 * @param {HtmlElement} [elemendId=loaderContainer] - id element for loading
 * @param {HtmlElement} [app=mainContent] - id element for app
 * @returns {void}
 */
export const hideLoading = ( loader = loaderContainer, app = mainContent ) => {
    loader.classList.add('hidden');
    app.style.display = "block";
};

export default {
    Display: displayLoading,
    Hide: hideLoading
}