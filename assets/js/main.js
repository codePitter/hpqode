function flip(id){
	var element = document.getElementById(id);
	if (element.className === id) {
        if(element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
        }
        else {
        element.style.transform = "rotateY(180deg)";
        }
  }
};

function videoStatus(videoId, btnId){
    var video = document.getElementById(videoId);
    var btn = document.getElementById(btnId);
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pausa <i class='fa fa-pause'></i>";
    } else {
        video.pause();
        btn.innerHTML = "Play <i class='fa fa-play'></i>";
    }
}