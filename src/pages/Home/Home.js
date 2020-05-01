import "../../vendor/normalize.css";
import "./Home.css";

import "ghost-finder";

/* Javascript */

const iconSearch = document.getElementById("icon-search");
const iconClose = document.getElementById("icon-close");
const searchContainer = document.getElementById("search-container");

iconSearch.addEventListener("click", event => {
    event.preventDefault();
    searchContainer.classList.add("isActive");

    iconClose.addEventListener("click", event => {
        event.preventDefault();
        searchContainer.classList.remove("isActive");
    });
});

const iconMenu = document.getElementById("icon-menu");
const subMenu = document.getElementById("navigation-submenu");
const iconArrow = document.getElementById("icon-arrow");

let state = false;

iconMenu.addEventListener("click", event => {
    event.preventDefault();

    if (!state) {
        subMenu.classList.add("isActive");
        iconArrow.classList.remove("icon-arrow-up");
        iconArrow.classList.add("icon-arrow-down");
        state = true;
    } else {
        subMenu.classList.remove("isActive");
        iconArrow.classList.remove("icon-arrow-down");
        iconArrow.classList.add("icon-arrow-up");
        state = false;
    }
});

new GhostFinder({
    input: "#search-input",
    showResult: "#search-result",
    resultTemplate: "<ul class='search-results-wrapper'>##results</ul>",
    contentApiKey: "e08066d77dbdb6606d68c93656",
});
