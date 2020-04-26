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

import Prism from 'prismjs';
import "prismjs/components/prism-elixir.js"
import "prismjs/components/prism-nginx.js"
import "prismjs/components/prism-ruby.js"
import "prismjs/components/prism-bash.js"
import "prismjs/components/prism-rust.js"
import "prismjs/components/prism-json.js"
import "prismjs/components/prism-git.js"


import { Socket } from "phoenix"
import { LiveSocket } from "phoenix_live_view"

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, { params: { _csrf_token: csrfToken } })

// Show progress bar on live navigation and form submits
// window.addEventListener("phx:page-loading-start", info => NProgress.start())
// window.addEventListener("phx:page-loading-stop", info => NProgress.done())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)
window.liveSocket = liveSocket

let isNavToggled = false;
let navbarFixed = document.getElementsByClassName("navbar-fixed")[0];
let white_bg = document.getElementsByClassName("navbar-wbg")[0]

// Nav
window.toggleNavbar = collapseID => {
  isNavToggled = !isNavToggled;
  if (isNavToggled) {
    document.getElementById(collapseID).classList.remove("hidden");
    document.getElementById(collapseID).classList.add("flex");
    if (!navbarSmall) {
      navbarFixed.classList.add("bg-white", "text-gray-700");
    }
  } else {
    document.getElementById(collapseID).classList.add("hidden");
    document.getElementById(collapseID).classList.remove("flex");
    if (!navbarSmall) {
      navbarFixed.classList.remove("bg-white", "text-gray-700");
    }
  }
};

function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

let navbarSmall = document.getElementsByClassName("navbar-small")[0];
window.addEventListener("scroll", () => {
  if (navbarSmall || white_bg) {
    if (!isNavToggled) {
      if (window.scrollY >= 10) {
        navbarFixed.classList.add("shadow-xl");
      } else {
        navbarFixed.classList.remove("shadow-xl");
      }
    }
  } else {
    if (!isNavToggled) {
      if (window.scrollY >= 10) {
        navbarFixed.classList.add("bg-white", "text-gray-700", "shadow-xl");
      } else {
        navbarFixed.classList.remove("bg-white", "text-gray-700", "shadow-xl");
      }
    }
  }
});

docReady(() => {
  if (navbarSmall || white_bg) {
    navbarFixed.classList.add("bg-white", "text-gray-700");
  }
})
