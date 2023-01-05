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





const updateProgress = (e) => {
        // console.log(e.srcElement);

        // currentTime and duration keyword came from video API
        /*
        // method-2 step-1
        let current_time = e.target.currentTime;
        let videoDuration = e.target.duration;
        */

        /*
        // Method-2 step-2
        const {currentTime} = e.target;
        const {duration} = e.target;
        console.log(currentTime,duration);
        */

        /*
        // Method-2 step-3
        const {currentTime,duration} = e.target;
        console.log(currentTime,duration);
        */

        /*
        // method-2 step-4
        const [current_time,videoDuration] = [e.target.currentTime, e.srcElement.duration];
        console.log(current_time,videoDuration);
        */

     if(videoScreen.currentTime === 0){
                progressInput.value = 0;
     }else{
         progressInput.value = (videoScreen.currentTime / videoScreen.duration) * 100;
     }
//      progressInput.value = (videoScreen.currentTime / videoScreen.duration) * 100;

     let videoMinutes =Math.floor(videoScreen.currentTime/60);
     let videoSeconds = Math.floor(videoScreen.currentTime%60);

     /*Method-1 for string concatination */
     /*
     if(videoMinutes < 10){
                // videoMinutes = '0' +videoMinutes;
                videoMinutes = '0' +String(videoMinutes);
     }
     if(videoSeconds < 10){
        // videoSeconds = '0' +videoSeconds;
        videoSeconds = '0' +String(videoSeconds);
}
//      displayTime.innerHTML = `${videoMinutes} : ${videoSeconds}`;

*/


          /*Method-2 for string concatination */
        const videoMinutesValue = videoMinutes.toString().padStart(2,'0');
        const videoSecondsValue = videoSeconds.toString().padStart(2,'0');
        displayTime.innerHTML = `${videoMinutesValue} : ${videoSecondsValue}`;


}


const setProgress = () => {
        videoScreen.currentTime = (progressInput.value*videoScreen.duration)/100;
}


const openFullscreenVideo = () => {

}

const closeFullscreenVideo = () => {

}

playBtn.addEventListener("click", playAndPaueVideo);
nextBtn.addEventListener("click",nextVideo);
prevBtn.addEventListener("click",prevVideo);
stopBtn.addEventListener("click",stopVideo);

videoScreen.addEventListener('timeupdate', updateProgress);
progressInput.addEventListener("click", setProgress);
