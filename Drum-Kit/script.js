
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(audio){
        audio.currentTime = 0
        audio.play();
        key.classList.add('playing');
    }
    return;
});

function removeTransition(e){
    if(e.propertyName == 'transform') {
    this.classList.remove('playing');
    }
    return;
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));