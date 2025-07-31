var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  document.body.appendChild(tag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('sportsShortFrame', {
      events: { 'onReady': onPlayerReady }
    });
  }

  function onPlayerReady(event) {
    var container = document.getElementById('sportsShort');
    container.addEventListener('mouseover', function() {
      player.playVideo();
    });
    container.addEventListener('mouseout', function() {
      player.pauseVideo();
    });
  }