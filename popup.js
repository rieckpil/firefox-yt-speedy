document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
  
    slider.oninput = function() {
      const speed = this.value / 2; // Convert slider value to playback speed
      speedValue.textContent = speed + 'x';
      // Send the selected speed to the content script
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {speed: speed});
      });
    };
  });
  