const videoElement = document.getElementById("video");
const buttonElement = document.getElementById("button");

//select media screen and pass it to video element
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    alert(err);
  }
};

selectMediaStream();

buttonElement.addEventListener("click", async () => {
  videoELement.hidden = false;
  buttonElement.disabled = true;
  await videoElement.requestPictureInPicture();
  buttonElement.disabled = false;
});
