document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;

  const slides = document.getElementsByClassName("mySlides");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
  }

  // ✅ Attach click events properly
  prev.addEventListener("click", () => plusSlides(-1));
  next.addEventListener("click", () => plusSlides(1));

  // Show first slide
  showSlides(slideIndex);
});