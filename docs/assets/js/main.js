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

function playVideo(id) {
    document.getElementById(id).play();
}

function pauseVideo(id) {
  document.getElementById(id).pause();
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}