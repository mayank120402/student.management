/*document.querySelector('.video-wrapper').addEventListener('click', function(){
  var vid = this.getAttribute('data-videoid');
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + vid + '?autoplay=1&mute=1';
  iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');
  this.innerHTML = '';
  this.appendChild(iframe);
}); */



/*document.querySelector('.video-container').addEventListener('click', function() {
    var vid = this.getAttribute('data-video-id');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + vid + '?autoplay=1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    this.innerHTML = '';
    this.appendChild(iframe);
  }); */


  // Load YouTube Iframe API

  /*var tag = document.createElement('script');
  /*tag.src = "https://www.youtube.com/player_api";*/
  /*tag.src="https://www.youtube.com/embed/sG9KdBMvYVo "

  document.body.appendChild(tag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video1', {
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    var wrapper = document.getElementById('video1-container');
    wrapper.addEventListener('mouseover', function() {
      player.playVideo();
    });
    wrapper.addEventListener('mouseout', function() {
      player.pauseVideo();
    });
  } */

// YouTube IFrame API load करें
  
var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  document.body.appendChild(tag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('annualFrame', {
      events: { onReady: onPlayerReady }
    });
  }

  function onPlayerReady(event) {
    var container = document.getElementById('annualFunc');
    container.addEventListener('mouseover', function() {
      player.playVideo();
    });
    container.addEventListener('mouseout', function() {
      player.pauseVideo();
    });
  }