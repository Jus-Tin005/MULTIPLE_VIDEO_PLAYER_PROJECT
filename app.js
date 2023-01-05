const videoScreen = document.getElementById("video_screen");

const playBtn = document.querySelector("#play"),
          stopBtn = document.querySelector("#stop"),
          prevBtn = document.querySelector("#previous"),
          nextBtn      = document.querySelector("#next");

const progressInput = document.getElementById("progress"),
          fullScreen    =       document.querySelectorAll("fullscreen"),
          displayTime   = document.getElementById("displayTime");

const container = document.querySelector(".container"),
          closeFullScreen       = document.querySelector("closeFullscreen"),
          openFullScreen        =       document.querySelector(".openFullscreen");


const videos = ["sample_video_1","sample_video_2"];
let currentIdx  = 0;


const loadVideo = (vdo) => {
        videoScreen.src = `./source/${vdo}.mp4`;
}

loadVideo(videos[currentIdx]);



const playVideo = () => {
        playBtn.querySelector("i.fas").classList.remove("fa-play");
        playBtn.querySelector("i.fas").classList.add("fa-pause");
        videoScreen.play();
}

const pauseVideo = () => {
        playBtn.querySelector("i.fas").classList.remove("fa-pause");
        playBtn.querySelector("i.fas").classList.add("fa-play");
        videoScreen.pause();
}

const playAndPaueVideo= () => {
        // paused keyword came from API
        if(videoScreen.paused){
                // videoScreen.play();
                playVideo();
        }else{
                // videoScreen.pause();
                pauseVideo();
        }
}

const nextVideo = () => {
       currentIdx++;
       if(currentIdx > videos.length -1){
                currentIdx = 0;
       }
       loadVideo(videos[currentIdx]);
       playVideo();
}

const prevVideo = () => {
        currentIdx--;
        if(currentIdx < 0){
                currentIdx = videos.length-1;
        }
        loadVideo(videos[currentIdx]);
        playVideo();
}


const stopVideo = () => {
        // currentTime keyword came from API
       videoScreen.currentTime = 0;
//        videoScreen.pause();
       pauseVideo();
}





const updateProgress = () => {

}


const setProgress = () => {

}


const openFullscreenVideo = () => {

}

const closeFullscreenVideo = () => {

}

playBtn.addEventListener("click", playAndPaueVideo);
nextBtn.addEventListener("click",nextVideo);
prevBtn.addEventListener("click",prevVideo);
stopBtn.addEventListener("click",stopVideo);
