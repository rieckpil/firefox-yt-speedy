chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      const video = document.querySelector('video');
      if (video && request.speed) {
        video.playbackRate = request.speed;
      }
    }
  );
  