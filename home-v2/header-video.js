(() => {
    function init(){
        const videoContainer = document.querySelector(".home-hero-video");
        if(!videoContainer){
            console.log("Video container not found")
            return false;
        }

        const video = videoContainer.querySelector("video");
        const playbackIcons = [...videoContainer.querySelectorAll(".playback-icon")]
        const soundButton = document.querySelector(".playback-icons");

        function toggleSound(){
            video.muted = !video.muted;
            if(video.muted){
                playbackIcons[0].style.opacity = "0";
                playbackIcons[1].style.opacity = "1";
            }else{
                playbackIcons[0].style.opacity = "1";
                playbackIcons[1].style.opacity = "0";
            }
        }

        video.addEventListener("click", toggleSound)
        soundButton.addEventListener("click", toggleSound)
    }

    window.addEventListener("load", init)
})()