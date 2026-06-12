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

// BOOK APPOINTMENT FORM
var apptDateInput = document.getElementById("appointmentDate");
if (apptDateInput) {
  var today = new Date().toISOString().split("T")[0];
  apptDateInput.setAttribute("min", today);
}

var appointmentForm = document.getElementById("appointmentForm");
var formSuccess = document.getElementById("formSuccess");

appointmentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data (ready to send to backend / email service)
  var data = {
    patientName: document.getElementById("patientName").value,
    patientPhone: document.getElementById("patientPhone").value,
    patientEmail: document.getElementById("patientEmail").value,
    patientAge: document.getElementById("patientAge").value,
    purpose: document.getElementById("purpose").value,
    doctorPref: document.getElementById("doctorPref").value,
    appointmentDate: document.getElementById("appointmentDate").value,
    appointmentTime: document.getElementById("appointmentTime").value,
    message: document.getElementById("message").value,
  };

  console.log("Appointment Request:", data);

  // TODO: send `data` to your backend or a service like Formspree/EmailJS here

  formSuccess.classList.add("show");
  appointmentForm.reset();

  formSuccess.scrollIntoView({ behavior: "smooth", block: "center" });

  setTimeout(function () {
    formSuccess.classList.remove("show");
  }, 6000);
});
