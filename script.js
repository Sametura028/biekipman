$('.slider').slick({
  prevArrow: '<div class="arrow-div"> <i class="fa-solid fa-angle-right custom-prev"></i></div>',
  nextArrow: '<div class="arrow-div"> <i class="fa-solid fa-angle-left custom-next"></i></div>'
});


$('.lines').click(function () {
  $('#line-2').toggleClass('opacity');
  $('#line-1').toggleClass('line-1');
  $('#line-3').toggleClass('line-3');
  $('.mobile-ver').toggleClass('open');
  $('body').toggleClass('no-scroll');
  $('html').toggleClass('no-scroll');
  document.querySelector(".form-btn").classList.remove("btn-warning");
  document.querySelector(".form-btn").classList.remove("btn");
});
// function showContactForm() {
//   document.querySelector(".contact-form").classList.remove("d-none");
//   document.querySelector(".demo-form").classList.add("d-none");
// }

// function showDemoForm() {
//   document.querySelector(".demo-form").classList.remove("d-none");
//   document.querySelector(".contact-form").classList.add("d-none");
// }

document.addEventListener("DOMContentLoaded", function () {
  // Get the button and form close (X) icon
  const demoButton = document.querySelector(".btn.btn-warning");
  const formCloseIcon = document.querySelector(".fa-xmark");

  // Get the header-form-background element
  const formBackground = document.querySelector(".header-form-background");

  // Add a click event listener to the demo button
  demoButton.addEventListener("click", function () {
    formBackground.classList.toggle("d-none");
  });

  // Add a click event listener to the form close icon
  formCloseIcon.addEventListener("click", function () {
    formBackground.classList.toggle("d-none");
  });
});