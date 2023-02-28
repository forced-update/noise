var sound = new Howl({
  src: ["audio/campfire_noise.ogg"],
  loop: true,
  volume: 0.9
});

var playing = false;
document.addEventListener('keyup', function(e){
    if(e.keyCode == 32) {
        if (playing == false) {
            playing = true;
            sound.play();
        } else {
            playing = false;
            sound.pause();
        }
    }
}, false);
