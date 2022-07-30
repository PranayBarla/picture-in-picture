const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user the select media stream, pass that to video element then play

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
        
    };
}

button.addEventListener('click',async ()=>{
    // Disable
    button.disabled = true;
    // Start Pic-in-pic
    await videoElement.requestPictureInPicture();
    // Reset
    button.disabled = false;
});

selectMediaStream();