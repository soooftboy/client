let queue = {
    songs: [
        {
            link: "alla_pugacheva-etot_mir",
            cover: "alla_pugacheva-etot_mir",
            name: "Этот мир",
            authors: [
                {
                    name: "Алла Пугачёва",
                    link: "alla-pugacheva"
                }
            ]

        },
        {
            link: "lolita-na_titanike",
            cover: "lolita-na_titanike",
            name: "На титанике",
            authors: [
                {
                    name: "Лолита",
                    link: "lolita"
                }
            ]
        },
        {
            link: "muslim_magomaev-koroleva_krasoti",
            cover: "muslim_magomaev-koroleva_krasoti",
            name: "Королева красоты",
            authors: [
                {
                    name: "Муслим Магомаев",
                    link: "muslim-magomaev"
                }
            ]
        }
    ],
    nowPlaying: 0
}

const music = document.querySelector('#music');




const volumeProgress = document.querySelector('#player-bar-volume-progress');
const volumeInput = document.querySelector('#player-bar-volume-input');
const buttonMuteSong = document.getElementById('player-bar-mute');
const volumeTrack = document.querySelector('#volume-track');
let volumeValue;
let saveVolume;
let isHoveredVolume = false;
let isHoveredMuteButton = false;

const trackProgress = document.querySelector('#player-bar-track-progress');
const trackInput = document.querySelector('#player-bar-track-input');
let trackValue;

const buttonPrevSong = document.querySelector('#player-bar-prev');
const buttonPlaySong = document.querySelector('#player-bar-play');
const buttonNextSong = document.querySelector('#player-bar-next');

let isMusicPause = true;

let currentTime;
let currentTimeMinutes;
let currentTimeSeconds;
let currentTimeAll;
let durationTime;
let durationTimeMinutes;
let durationTimeSeconds;
let durationTimeAll;

let songTimer;

const playerBarIconPlay = '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 11.634C22.1667 12.0189 22.1667 12.9811 21.5 13.366L4.25 23.3253C3.58333 23.7102 2.75 23.2291 2.75 22.4593L2.75 2.54071C2.75 1.77091 3.58334 1.28978 4.25 1.67468L21.5 11.634Z" fill="#FF3D6A"/></svg>'
const playerBarIconPause = '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0588 1C10.0588 0.447715 9.61104 0 9.05875 0H3.70581C3.15353 0 2.70581 0.447716 2.70581 1V24C2.70581 24.5523 3.15353 25 3.70581 25H9.05875C9.61104 25 10.0588 24.5523 10.0588 24V1ZM21.8235 1C21.8235 0.447715 21.3757 0 20.8235 0H15.4705C14.9182 0 14.4705 0.447716 14.4705 1V24C14.4705 24.5523 14.9182 25 15.4705 25H20.8235C21.3757 25 21.8235 24.5523 21.8235 24V1Z" fill="#FF3D6A"/></svg>';

const toggleClassPrevButton = () => {
    if (
        queue.nowPlaying === '0' &&
        music.currentTime === 0
    ) {
        buttonPrevSong.classList.add('disabled');
    } else {
        if (buttonPrevSong.classList.contains('disabled')) {
            buttonPrevSong.classList.remove('disabled');
        }
    }
}

const togglePlayIcon = () => {
    if (music.paused) {
        document.querySelector('#player-bar-play').innerHTML = playerBarIconPlay;
    } else {
        document.querySelector('#player-bar-play').innerHTML = playerBarIconPause;
    }
};

const setCurrentTime = () => {
    currentTime = Math.round(+music.currentTime);

    currentTimeSeconds = currentTime % 60;
    currentTimeMinutes = (currentTime - currentTimeSeconds) / 60;
    if (currentTimeSeconds < 10) {
        currentTimeSeconds = `0${currentTimeSeconds}`;
    }
    currentTimeAll = `${currentTimeMinutes}:${currentTimeSeconds}`;

    document.querySelector('.track__current').innerHTML = currentTimeAll;
};

const playMusic = () => {
    if (music.paused) {
        isMusicPause = false;
        music.play();
        setCurrentTimeAndTimeline();
        setTrack();
        songTimer = setInterval(() => {
            setCurrentTimeAndTimeline();
            setTrack();
        }, 1000)
    } else {
        isMusicPause = true;
        music.pause();
        clearInterval(songTimer)
    }
    togglePlayIcon();
}

const setDurationTime = () => {
    durationTime = Math.round(+music.duration);

    trackInput.max = durationTime;
    durationTimeSeconds = durationTime % 60;
    durationTimeMinutes = (durationTime - durationTimeSeconds) / 60;
    if (durationTimeSeconds < 10) {
        durationTimeSeconds = `0${durationTimeSeconds}`;
    }
    durationTimeAll = `${durationTimeMinutes}:${durationTimeSeconds}`;

    document.querySelector('.track__duration').innerHTML = durationTimeAll;

    changeTrack();
};

const setTimeline = () => {
    trackValue = currentTime;
    trackInput.value = trackValue;

    changeTrack();
};

const changeTimeline = () => {
    trackValue = trackInput.value;
    music.currentTime = trackValue;
    setCurrentTimeAndTimeline();
};

const setCurrentTimeAndTimeline = () => {
    setCurrentTime();
    setTimeline();
};

const setVolume = () => {
    let volume = volumeValue/100;
    localStorage.setItem('volumeValue', volume);
};

const setTrack = () => {
    localStorage.setItem('trackCurrent', trackValue);
};

const changeVolume = () => {
    volumeProgress.style.width = `calc((${volumeValue}% / 40) * 100)`;
    music.volume = +volumeValue/100
};

const changeTrack = () => {
    trackProgress.style.width = `calc((${trackValue}% / ${durationTime}) * 100 + 7px)`;

    if ((+trackInput.max / +trackInput.value) < 2) {
        trackProgress.style.maxWidth = `calc((${trackValue}% / ${durationTime}) * 100)`;
    } else {
        trackProgress.style.maxWidth = 'auto';
    }
    toggleClassPrevButton();
};

const getVolume = () => {
    volumeValue = localStorage.getItem('volumeValue') * 100;
    volumeInput.value = volumeValue;
    changeVolume();
};

const getTrack = () => {
    trackValue = localStorage.getItem('trackCurrent');
    trackInput.value = trackValue;
    changeTimeline();
};

const toggleMuteButton = () => {
    if (volumeValue < 27) {
        document.querySelector('.player-bar-mute-wave-one').classList.add('dn');
    } else {
        document.querySelector('.player-bar-mute-wave-one').classList.remove('dn');
    }

    if (volumeValue < 14) {
        document.querySelector('.player-bar-mute-wave-two').classList.add('dn');
    } else {
        document.querySelector('.player-bar-mute-wave-two').classList.remove('dn');
    }
    if (volumeValue !== 0) {
        document.querySelector('.player-bar-mute-off').classList.remove('dn');
        document.querySelector('.player-bar-mute-on').classList.add('dn');
    } else {
        document.querySelector('.player-bar-mute-on').classList.remove('dn');
        document.querySelector('.player-bar-mute-off').classList.add('dn');
    }
};

const setSongOnload = () => {
    queue.nowPlaying = localStorage.getItem('nowPlaying');
    setSong();
};

const setSong = () => {
    let songSelected = queue.nowPlaying;
    let assets = 'assets';

    if (document.body.classList.contains('author-page')) {
        assets = '../../assets';
    }

    document.querySelector('.player-bar__cover').src = `${assets}/img/playerbar/${queue.songs[songSelected].cover}.png`;
    document.querySelector('.player-bar__name').innerHTML = queue.songs[songSelected].name;
    let authors = '';
    for (let i = 0; i < queue.songs[songSelected].authors.length; i++) {
        let author = `<a href="${assets}/../authors/${queue.songs[songSelected].authors[i].link}/index.html">${queue.songs[songSelected].authors[i].name}</a>`;
        if (i > 0) {
            author = `, ${author}`;
        }
        authors += author;
    }
    document.querySelector('.player-bar__authors').innerHTML = authors;
    music.src = `${assets}/media/${queue.songs[songSelected].link}.mp3`;

    // let authorsForTitle = '';
    // for (let i = 0; i < queue.songs[songSelected].authors.length; i++) {
    //     let author = queue.songs[songSelected].authors[i];
    //     if (i > 0) {
    //         author = `, ${author}`;
    //     }
    //     authorsForTitle += author;
    // }
    //
    // let test = `${queue.songs[songSelected].name} — ${authorsForTitle} | Absolute Music`;
    //
    // document.title = test;
};

const setNextSong = () => {
    let songIndex = queue.nowPlaying;
    songIndex++;

    queue.nowPlaying = songIndex;

    if (songIndex > Object.keys(queue.songs).length - 1) {
        songIndex = 0;
        queue.nowPlaying = songIndex;
    }


    setSong();

    currentTime = 0;

    localStorage.setItem('nowPlaying', queue.nowPlaying);

    playMusic();
    setCurrentTimeAndTimeline();
};

const setPrevSong = () => {
    let songIndex = queue.nowPlaying;
    songIndex--;

    queue.nowPlaying = songIndex;

    if (songIndex < 0 || currentTime > 4) {
        songIndex++;
        queue.nowPlaying = songIndex;
        music.currentTime = 0;
        setCurrentTimeAndTimeline();
    } else {
        setSong()

        currentTime = 0

        localStorage.setItem('nowPlaying', queue.nowPlaying);

        playMusic();
        setCurrentTimeAndTimeline();
    }
}


music.addEventListener('loadeddata', () => {
    getTrack();
    getVolume();
    setDurationTime();
    toggleMuteButton();
    toggleClassPrevButton();
});

music.addEventListener('ended', () => {
    setNextSong();
});

buttonPlaySong.onclick = () => {
    playMusic();
};

document.addEventListener('keydown', e => {
    if (document.activeElement !== document.querySelector('#inputSearch')) {
        if (e.keyCode === 0 || e.keyCode === 32) {
            playMusic();
            e.preventDefault();
        }
    }
})

// const addScript = () => {let head = document.querySelector('head').innerHTML;let allHead = `${head}<script>const skipOp = () => {let currentTime = document.querySelector('.fp-engine').currentTime + 80;document.querySelector('.fp-engine').currentTime = currentTime;}document.addEventListener('keydown', e => {if (e.keyCode === 192) {skipOp();}})</script>`;document.querySelector('head').innerHTML = allHead;}

const skipOp = () => {
    let currentTime = document.querySelector('.fp-engine').currentTime + 80;document.querySelector('.fp-engine').currentTime = currentTime;
}

document.addEventListener('keydown', e => {
    if (e.keyCode === 192) {
        skipOp();
    }
});


buttonMuteSong.onclick = () => {
    if (typeof saveVolume === 'undefined') {
        saveVolume = 20;
    }
    if (volumeValue !== 0) {
        saveVolume = volumeValue;
        volumeValue = 0;
        document.querySelector('.player-bar-mute-off').classList.add('dn');
        document.querySelector('.player-bar-mute-on').classList.remove('dn');

    } else {
        volumeValue = saveVolume;
        document.querySelector('.player-bar-mute-on').classList.add('dn');
        document.querySelector('.player-bar-mute-off').classList.remove('dn');
    }

    volumeInput.value = volumeValue;
    changeVolume();
};

buttonMuteSong.onmouseenter = () => {
    isHoveredMuteButton = true;
    document.querySelector('.volume__track').style.display = "block";
};

buttonMuteSong.onmouseleave = () => {
    isHoveredMuteButton = false;
    document.querySelector('.volume__track').style.display = "none";
};

volumeTrack.onmouseenter = () => {
    isHoveredVolume = true;
    document.querySelector('.volume__track').style.display = "block";
};

volumeTrack.onmouseleave = () => {
    isHoveredVolume = false;
    document.querySelector('.volume__track').style.display = "none";
};

volumeInput.oninput = () => {
    volumeValue = +volumeInput.value;



    toggleMuteButton();
    changeVolume();
    setVolume();
};

trackInput.onchange = () => {
    if (!isMusicPause) {
        music.play();
    }
};

trackInput.oninput = () => {
    trackValue = +trackInput.value;

    changeTrack();
    setTrack();
    changeTimeline();
    if (!isMusicPause) {
        music.pause();
    }
};

buttonNextSong.onclick = () => {
    setNextSong();
}

buttonPrevSong.onclick = () => {
    setPrevSong();
}

toggleMuteButton();
setSongOnload();