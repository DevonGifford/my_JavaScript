const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


//Music
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-3',
        displayName: 'Goodnight, Diso Queen',
        artist: 'Jacinto Design',
    },
    {
        name: 'metric-1',
        displayName: 'Front Row (Remix)',
        artist: 'Metric/Jacinto Design',
    }
];

//Chekc if Playing 
let isPlaying = false;

//play 
function playSong () {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

//Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM 
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}


// Now Playing 
let songIndex = 0;

// Previous Song
function prevSong () {
    songIndex--;
    //catching type error - Loop through to start
    if (songIndex <0) {
        songIndex = songs.length -1;
    }
    //console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong () {
    songIndex++;
    //catching type error - Loop through to end
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    //console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}


// On Load - Select First Song 
loadSong (songs[songIndex]);


// Update Progress bar & time
function updateProgressBar(e) {
    if (isPlaying) {
        //console.log(e);
        const { duration, currentTime } = e.srcElement;
        //console.log(duration, currentTime);
        
        /* -------- Updating progress bar width -------- */
        const progressPercent = (currentTime / duration) * 100;
        //console.log(progressPercent);
        progress.style.width = `${progressPercent}%`;

        /* -------- Calculate display for duration -------- */

    }
}


/* -----------------------------------------------------------------------------------------------
        EVENT LILSTENERS
    ---------------------------------------------------------------------------------------------*/

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);