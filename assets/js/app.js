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

import { Socket } from "phoenix"
import { LiveSocket } from "phoenix_live_view"

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")

window.isNavToggled = false;

let Hooks = {
  NavState: {
    style() {
      console.debug(this.el.dataset)
      return this.el.dataset.style
    },
    mounted() {
      if (window.isNavToggled) {
        window.toggleNavbar('collapse-navbar')
      }
      window.scrollTo(0, 0);

      let navbarFixed = document.getElementsByClassName("navbar-fixed")[0]

      if (this.style() == "white") {
        navbarFixed.classList.add("nav-white", "bg-white", "text-gray-700")
      } else {
        navbarFixed.classList.remove("nav-white", "bg-white", "text-gray-700");
      }
    }
  },
  PostShowCode: {
    mounted() {
      import('prismjs').then(module => {
        const Prism = module.default
        window.Prism = Prism
        import("prismjs/components/prism-elixir.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-nginx.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-ruby.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-bash.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-rust.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-json.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-git.js").then(() => {
          window.Prism.highlightAll()
        })
      })
    },
    updated() {
      import('prismjs').then(module => {
        const Prism = module.default
        window.Prism = Prism
        import("prismjs/components/prism-elixir.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-nginx.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-ruby.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-bash.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-rust.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-json.js").then(() => {
          window.Prism.highlightAll()
        })
        import("prismjs/components/prism-git.js").then(() => {
          window.Prism.highlightAll()
        })
      })
    }
  },
  PostUploader: {
    mounted() {
      document.getElementById("file").addEventListener("change", () => { draw("post") }, false)
    }
  },
  SnapUploader: {
    mounted() {
      document.getElementById("file").addEventListener("change", () => { draw("snap") }, false)
    }
  },
  SnapNav: {
    mounted() {

      let target = this;
      var myElement = document.getElementById('image');

      // create a simple instance
      // by default, it only adds horizontal recognizers
      import('hammerjs')
        .then(Hammer => {
          var mc = new Hammer.default(myElement);

          // listen to events...
          mc.on("panleft panright tap press", function (ev) {
            console.debug(ev)
            switch (ev.type) {
              case "panleft":
                target.pushEvent("keydown", { code: "ArrowRight", key: "ArrowRight" });
                break;
              case "panright":
                target.pushEvent("keydown", { code: "ArrowLeft", key: "ArrowLeft" });
                break;
              case "tap":

                break;
              case "press":

                break;
            }
          });
        })
    }
  }
}
function draw(target) {

  var ctx = document.getElementById('canvas').getContext('2d'),
    img = new Image(),
    f = document.getElementById("file").files[0],
    url = window.URL || window.webkitURL,
    src = url.createObjectURL(f);

  if (target == "snap") {

    let reader = new FileReader();
    reader.readAsArrayBuffer(f)
    reader.onload = function () {
      console.log(reader.result);
      import('exifreader')
        .then(ExifReader => {
          let exif = ExifReader.load(reader.result);
          document.getElementById("snap_exif_string").value = JSON.stringify(exif)
          console.debug(exif)

          import('json-formatter-js')
            .then(JSONFormatter => {
              const myJSON = exif;
              const formatter = new JSONFormatter.default(myJSON);

              document.getElementById("image_exif").appendChild(formatter.render());
            });
        }); // using the default export
    };

    reader.onerror = function () {
      console.log(reader.error);
    };

  }
  img.src = src;
  img.onload = function () {
    ctx.canvas.width = img.width;
    ctx.canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    url.revokeObjectURL(src);
    process_image(target)
  }
}

function process_image(target) {
  import("@silvia-odwyer/photon").then(photon => {
    // Create a canvas and get a 2D context from the canvas
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let image = photon.open_image(canvas, ctx);

    let resized_img_container = document.getElementById("resized_imgs");

    let percent1 = 2400 / image.get_width()
    let width1 = image.get_width() * percent1
    let height1 = image.get_height() * percent1
    let newcanvas1 = photon.resize(image, width1, height1, 3)
    //resized_img_container.appendChild(newcanvas1);

    let percent2 = 800 / image.get_width()
    let width2 = image.get_width() * percent2
    let height2 = image.get_height() * percent2
    let newcanvas2 = photon.resize(image, width2, height2, 3)
    resized_img_container.appendChild(newcanvas2);

    let largeDataURL = newcanvas1.toDataURL('image/jpeg');
    let largeBlob = dataURItoBlob(largeDataURL);

    let thumbDateURL = newcanvas2.toDataURL('image/jpeg');
    let thumbBlob = dataURItoBlob(thumbDateURL);

    let uuid = createUUID();

    let thumUrl = new XMLHttpRequest();
    thumUrl.open('PUT', "/api/gen_presigned_url", true);
    thumUrl.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    thumUrl.addEventListener('load', (e) => {
      let result = JSON.parse(e.target.responseText)
      let url = result.data.url
      let upload = new XMLHttpRequest();
      upload.addEventListener('load', (e) => {
        document.getElementById(`${target}_thumb_img`).value = `https://morphicpro.s3-us-west-2.amazonaws.com/${target}s/${uuid}/thumb.jpg`
      })
      upload.open('PUT', url, true);
      upload.setRequestHeader('Content-Type', "image/jpeg");
      upload.send(thumbBlob)
    });

    thumUrl.send(`{"file": "/${target}s/${uuid}/thumb.jpg"}`)

    let largeUrl = new XMLHttpRequest();
    largeUrl.open('PUT', "/api/gen_presigned_url", true);
    largeUrl.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    largeUrl.addEventListener('load', (e) => {
      let result = JSON.parse(e.target.responseText)
      let url = result.data.url
      let upload = new XMLHttpRequest();
      upload.addEventListener('load', (e) => {
        document.getElementById(`${target}_large_img`).value = `https://morphicpro.s3-us-west-2.amazonaws.com/${target}s/${uuid}/large.jpg`
        document.getElementById("bg-image").style["background-image"] = `url(https://morphicpro.s3-us-west-2.amazonaws.com/${target}s/${uuid}/large.jpg)`
      })
      upload.open('PUT', url, true);
      upload.setRequestHeader('Content-Type', "image/jpeg");
      upload.send(largeBlob)
    });
    largeUrl.send(`{"file": "/${target}s/${uuid}/large.jpg"}`)
  })
}


function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else
    byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}

function createUUID() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}


let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks, params: { _csrf_token: csrfToken } })

// Show progress bar on live navigation and form submits
// window.addEventListener("phx:page-loading-start", info => NProgress.start())
// window.addEventListener("phx:page-loading-stop", info => NProgress.done())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)
window.liveSocket = liveSocket


let navbarFixed = document.getElementsByClassName("navbar-fixed")[0];

// Nav
window.toggleNavbar = collapseID => {
  window.isNavToggled = !window.isNavToggled;
  if (isNavToggled) {
    document.getElementById(collapseID).classList.remove("hidden");
    document.getElementById(collapseID).classList.add("flex");
  } else {
    document.getElementById(collapseID).classList.add("hidden");
    document.getElementById(collapseID).classList.remove("flex");
  }
};

window.addEventListener("scroll", () => {
  let navbarWhite = document.getElementsByClassName("nav-white")[0];
  if (window.scrollY >= 10) {
    navbarFixed.classList.add("shadow-xl")
    if (!navbarWhite) {
      navbarFixed.classList.add("bg-white", "text-gray-700");
    }
  } else {
    navbarFixed.classList.remove("shadow-xl")
    if (!navbarWhite) {
      navbarFixed.classList.remove("bg-white", "text-gray-700")
    }
  }
});


