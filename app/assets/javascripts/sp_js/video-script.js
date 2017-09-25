/**
 * Demo 2
 *
 * Wiring up a custom controller to our video to
 * allow for playback, pause, mute, and unmute.
 */
(function() {
	//play-video
  // cache vars
  	if ($('#about-video').length > 0 ) {
        //alert('Found with Length bigger then Zero');
    }
	else
	{
		return false;
	}
	
	
  var cmn_video = document.getElementById("headerMovie"),
      cmn_playback = document.getElementById("play-video"),
      cmn_stop = document.getElementById("close-video");

  // listen for playback
  cmn_playback.addEventListener( "click", function(e) {
    e.preventDefault();
    if (cmn_video.paused) {
		cmn_video.play();
		$('#play-video').css({'display':'none'});
		$('#close-video').css({'display':'block'});
		$('#headerMovie').css({'opacity':1});
    } else {
      cmn_video.pause();
    }
  } );
  cmn_video.addEventListener('ended',myHandler,false);
    function myHandler(e) {
        // What you want to do after the event
		//alert('done');
		$('#play-video').css({'display':'block'});
		$('#close-video').css({'display':'none'});
    }
	cmn_stop.addEventListener( "click", function(e) {
		cmn_video.pause();
		///
		$('#play-video').css({'display':'block'});
		$('#close-video').css({'display':'none'});
		$('#headerMovie').css({'opacity':0});
	});
  // listen for mute/unmute
 /* cmn_mute.addEventListener( "click", function(e) {
    e.preventDefault();
    if (cmn_video.muted) {
      cmn_video.muted = false;
      cmn_mute.innerHTML = "Mute";
    } else {
      cmn_video.muted = true;
      cmn_mute.innerHTML = "Unmute";
    }
  } );*/

})();