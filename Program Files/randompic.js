//create an array of images
var imagesToDisplay = ["../randomImages/beautifullandscape.jpg", "../randomImages/blackhole.jpg",
"../randomImages/penguin.jpg", "../randomImages/slinky.jpg", "../randomImages/water.jpg"];

function displayRandomImage() {
    var imageNum = Math.floor(Math.random * imagesToDisplay.length);
    document.getElementByID("backgroundimage").src = imagesToDisplay[imageNum];
}

