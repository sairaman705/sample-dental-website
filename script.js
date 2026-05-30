document.getElementById("hamburgerBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  document.querySelector(".mobile-menu").classList.toggle("open");
});

document.addEventListener("click", function (e) {
  if (!e.target.closest("nav") && !e.target.closest(".mobile-menu")) {
    document.querySelector(".mobile-menu").classList.remove("open");
  }
});
document.querySelectorAll(".mobile-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.remove("open");
  });
});

var slides = document.querySelectorAll(".hero-slide");
var dots = document.querySelectorAll(".hero-dot");
var current = 0;
var timer;

function goToSlide(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = index;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
  clearInterval(timer);
  timer = setInterval(nextSlide, 4500);
}

function nextSlide() {
  goToSlide((current + 1) % slides.length);
}

timer = setInterval(nextSlide, 4500);
