/*Get our elements */
const player = document.querySelector('.container');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress_filled');
const toggle = document.querySelector('.toggle');
const skipBtns = player.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player_slider')

/*Build out functions */
function togglePlay(){
    const method = video.paused ? 'play':'pause';
    video[method]();
    const icon = video.paused ? '▶': '❚ ❚'
    toggle.textContent = icon;
}

/*Hook up the event listeners */
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);