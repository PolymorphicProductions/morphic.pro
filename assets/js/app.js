// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

let isNavToggled = false;
let navbarFixed = document.getElementsByClassName("navbar-fixed")[0];

// Nav
window.toggleNavbar = collapseID => {
  isNavToggled = !isNavToggled;
  if (isNavToggled) {
    document.getElementById(collapseID).classList.remove("hidden");
    document.getElementById(collapseID).classList.add("flex");
    navbarFixed.classList.add("bg-white", "text-gray-700");
  } else {
    document.getElementById(collapseID).classList.add("hidden");
    document.getElementById(collapseID).classList.remove("flex");
    navbarFixed.classList.remove("bg-white", "text-gray-700");
  }
};

window.addEventListener("scroll", () => {
  if (!isNavToggled) {
    if (window.scrollY >= 10) {
      navbarFixed.classList.add("bg-white", "text-gray-700");
    } else {
      navbarFixed.classList.remove("bg-white", "text-gray-700");
    }
  }
});

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket";
