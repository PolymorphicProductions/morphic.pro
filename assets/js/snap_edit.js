import * as EasyMDE from "easymde";
import ExifReader from 'exifreader';

const easymdeBody = new EasyMDE({
  element: document.getElementById("snap_body")
});
const easymdeExcerpt = new EasyMDE({
  element: document.getElementById("snap_excerpt")
});


function draw(ev) {
  var ctx = document.getElementById('canvas').getContext('2d'),
    img = new Image(),
    f = document.getElementById("uploadimage").files[0],
    url = window.URL || window.webkitURL,
    src = url.createObjectURL(f);

  let reader = new FileReader();
  reader.readAsArrayBuffer(f)
  reader.onload = function () {
    console.log(reader.result);
    let exif = ExifReader.load(reader.result);
    document.getElementById("snap_exif_string").value = JSON.stringify(exif)
    console.debug(exif)
  };

  reader.onerror = function () {
    console.log(reader.error);
  };

  img.src = src;
  img.onload = function () {
    ctx.canvas.width = img.width;
    ctx.canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    url.revokeObjectURL(src);
    process_image()
  }
}
document.getElementById("uploadimage").addEventListener("change", draw, false)

function process_image() {
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
        document.getElementById("snap_thumb_img").value = `https://morphicpro.s3-us-west-2.amazonaws.com/snaps/${uuid}/thumb.jpg`
      })
      upload.open('PUT', url, true);
      upload.setRequestHeader('Content-Type', "image/jpeg");
      upload.send(thumbBlob)
    });

    thumUrl.send(`{"file": "/snaps/${uuid}/thumb.jpg"}`)

    let largeUrl = new XMLHttpRequest();
    largeUrl.open('PUT', "/api/gen_presigned_url", true);
    largeUrl.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    largeUrl.addEventListener('load', (e) => {
      let result = JSON.parse(e.target.responseText)
      let url = result.data.url
      let upload = new XMLHttpRequest();
      upload.addEventListener('load', (e) => {
        document.getElementById("snap_large_img").value = `https://morphicpro.s3-us-west-2.amazonaws.com/snaps/${uuid}/large.jpg`
      })
      upload.open('PUT', url, true);
      upload.setRequestHeader('Content-Type', "image/jpeg");
      upload.send(largeBlob)
    });
    largeUrl.send(`{"file": "/snaps/${uuid}/large.jpg"}`)
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
