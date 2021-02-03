// main.js

// TODO
document.getElementById("volume-number").addEventListener("change",
    function changeVolumeByNumber() {
        var inputNumberVal = document.getElementById("volume-number").value;
        document.getElementById("volume-slider").value = inputNumberVal;
        if (inputNumberVal == 0) {
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        } else if (inputNumberVal <= 34) {
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        } else if (inputNumberVal <= 66) {
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        } else {
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        }
    }
);

document.getElementById("volume-slider").addEventListener("change",
    function changeVolumeBySlide() {
        var inputSlideVal = document.getElementById("volume-slider").value;
        document.getElementById("volume-number").value = inputSlideVal;
        if (inputSlideVal == 0) {
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        } else if (inputSlideVal <= 34) {
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        } else if (inputSlideVal <= 66) {
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        } else {
            document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        }
    }
);
//horn-sound


var hornSound = document.getElementById("horn-sound");
var hornImage = document.getElementById("sound-image");

document.getElementById('radio-air-horn').addEventListener("click",
    function() {
        hornSound.src = "./assets/media/audio/air-horn.mp3";
        hornImage.src = "./assets/media/images/air-horn.svg";
    }
);

document.getElementById('radio-car-horn').addEventListener("click",
    function() {
        hornSound.src = "./assets/media/audio/car-horn.mp3";
        hornImage.src = "./assets/media/images/car.svg";
    }
);

document.getElementById('radio-party-horn').addEventListener("click",
    function() {
        hornSound.src = "./assets/media/audio/party-horn.mp3";
        hornImage.src = "./assets/media/images/party-horn.svg";
    }
);

document.getElementById('party-horn-form').addEventListener("submit",
    function(event) {
        event.preventDefault();
        var audioSrc = document.getElementById("horn-sound").src;
        var audio = new Audio(audioSrc);
        audio.volume = document.getElementById("volume-number").value / 100;
        audio.play();
    }
);