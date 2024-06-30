let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let cntrolIcon = document.querySelector("#cntrolIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

let playPause = () => {
    if (cntrolIcon.classList.contains("fa-pause")) {
        song.pause();
        cntrolIcon.classList.remove("fa-pause");
        cntrolIcon.classList.add("fa-play");
    } else {
        song.play();
        cntrolIcon.classList.add("fa-pause");
        cntrolIcon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);  //half sec bad slider update/move ho rha hy
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    cntrolIcon.classList.add("fa-pause");
    cntrolIcon.classList.remove("fa-play");
}