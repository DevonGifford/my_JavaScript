const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt user to select media, pass to video element, the play
async function selectMedia() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('error with selecting Media:', error);

    }
}


button.addEventListener('click', async () => {
    //Disbale the button
    button.disabled = true;
    //start Picture in picture
    await videoElement.requestPictureInPicture();
    //reset the button
    button.disabled = false;
});
 
// On Load
selectMedia();