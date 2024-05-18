var data = {
    title: [
        'polo-pan-canopee',
        "Nemra - Nare",
        "Billie Eilish - everything i wanted",
        "Claud Debussy - Reverie",
        "Tigran Hamasyan - Leaving Paris",
        "Freddie Mercury - Mamma"
    ],
    song: [
        'music/polo-pan-canopee.mp3',
        "music/Nemra - Nare.mp3",
        "music/Billie Eilish - everything i wanted.mp3",
        "music/Debussy Reverie.mp3",
        "music/Tigran Hamasyan Leaving Paris.mp3",
        "music/Freddie Mercury - Mamma (Bohemian Rhapsody).mp3"
    ],
    poster: [
        "https://i.gifer.com/7d20.gif",
        "https://media2.giphy.com/media/5xtDarmSceWsGyD4VeE/source.gif",
        "https://cdn.dribbble.com/users/1242979/screenshots/7099165/music.gif",
        "https://i.gifer.com/8RWM.gif",
        "https://media2.giphy.com/media/Y0GyZQpjqafoatTvjB/giphy.gif",
        "https://cdn.dribbble.com/users/1921422/screenshots/5511883/freddie.gif"
    ]
}

let currentSong = 0

let song = new Audio()

window.onload = function () {
    playSong()
}


function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play()
}


function playOrPauseSong() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}




console.log(song);

song.addEventListener("timeupdate", function () {

    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration
    fill[0].style.marginLeft = position * 99 + "%"


    convertTime(song.currentTime)
    totalTime(Math.round(song.duration))

    if (song.ended) {
        next()
    }
})



function convertTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime[0].textContent = min + ":" + sec
    
}


function totalTime(seconds) {

        console.log(song.duration);
        let currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec


    currentTime[0].textContent += " / " + min + ":" + sec
    
}

function prev() {
    currentSong--
    let play = document.getElementById("play")
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }

    playSong()
    play.src = "images/pause.png"
}


function  next(){
      currentSong++


      let play = document.getElementById("play")
    if (currentSong == data.song.length) {
        currentSong = 0
    }

    playSong()
    play.src = "images/pause.png"

}



function  mute(){
       let mute  = document.getElementById("mute")
       
       if(song.muted ){
                    song.muted = false
                    mute.src = "images/volume.png"
       }else{
                    song.muted  = true
                    mute.src  = "images/volume-mute.png"
       }
       
}


function  decrease(){
    let mute  = document.getElementById("mute")

    song.volume -= 0.2

    if(song.volume <= 0.1){
                mute.src  = "images/volume-mute.png"
    }
}

function increase(){
    let mute  = document.getElementById("mute")

    song.volume += 0.2

    if(song.volume >= 0.2){
        mute.src = "images/volume.png"
    }
}