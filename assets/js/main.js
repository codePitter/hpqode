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
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}