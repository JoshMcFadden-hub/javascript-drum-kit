window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
    const text = document.querySelector(`.text[data-key = '${e.keyCode}']`);
    audio.currentTime = 0;
    audio.play();
    text.classList.toggle('playing')
});

window.addEventListener('keyup',function(e) {
    const text = document.querySelector(`.text[data-key = '${e.keyCode}']`);
    text.classList.remove('playing')
});