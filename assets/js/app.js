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

// import * as EasyMDE from "easymde";
// const easymdeBody = new EasyMDE({
//   element: document.getElementById("post_body")
// });
// const easymdeExcerpt = new EasyMDE({
//   element: document.getElementById("post_excerpt")
// });

let isNavToggled = false;
let navbarFixed = document.getElementsByClassName("navbar-fixed")[0];

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
  if (navbarSmall) {
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
  if (navbarSmall) {
    navbarFixed.classList.add("bg-white", "text-gray-700");
  }
})

import("@silvia-odwyer/photon").then(photon => {
  console.log("WTF")

  window.filterImage = () => {
    // Create a canvas and get a 2D context from the canvas
    var canvas = document.getElementById("test1");
    var ctx = canvas.getContext("2d");

    // Draw the image element onto the canvas
    //ctx.drawImage(newimg, 0, 0);

    // Convert the ImageData found in the canvas to a PhotonImage (so that it can communicate with the core Rust library)
    let image = photon.open_image(canvas, ctx);
    // let img = photon:: open_image("/images/login3.jpg");
    // Filter the image, the PhotonImage's raw pixels are modified
    photon.filter(image, "golden");
    // photon.resize(image, 100, 100, 3)

    debugger
    // Place the modified image back on the canvas
    photon.putImageData(canvas, ctx, image);
  }
})

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket";
