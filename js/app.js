// select our play button
const playButton = document.querySelector('button#camping-sound-control');

var sound = new Howl({
  src: ["audio/campfire_noise.ogg"],
  loop: true,
  volume: 0.9
});

playButton.addEventListener('click', function() {
    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        sound.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        sound.pause();
        this.dataset.playing = 'false';
    }

}, false);
