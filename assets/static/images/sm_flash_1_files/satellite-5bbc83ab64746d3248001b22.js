_satellite.pushAsyncScript(function(event, target, $variables){
  if (typeof jQuery != 'undefined') {
  if (window.location.hostname.indexOf('behance') !== -1) {
    var linkname = '',
      linkTrack = function(linkname) {
        s_adbadobenonacdc.eVar69 = s_adbadobenonacdc.pageName;
        s_adbadobenonacdc.linkTrackVars = 'prop3,prop4,prop5,prop27,prop52,eVar28,eVar12,eVar69,eVar80,eVar111,events';
        s_adbadobenonacdc.tl(true, "o", linkname);
      };


    $(document).on("click", "._1vTEMy3MjG_3kNjQ0Po13X", function() {
      linkname = s_adbadobenonacdc.prop3 + ":" + "PlayerClick"
      linkTrack(linkname);
    })

    $(document).on("click", "._3brx8xIOZUwP-uOcefkWV- ._1CwwVeVhhg1hjgk5eWN_ve", function() {
      linkname = s_adbadobenonacdc.prop3 + ":" + "WatchReplayButtonClick"
      linkTrack(linkname);
    })
  }
}
});
