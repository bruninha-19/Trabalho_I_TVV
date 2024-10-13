document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");
  const btnPrev = document.getElementById("prev-button");
  const btnNext = document.getElementById("next-button");

  let currentSlide = 0;

  function hideSlider() {
    sliders.forEach((item) => item.classList.remove("on"));
  }

  function showSlider() {
    if (sliders[currentSlide]) {
      sliders[currentSlide].classList.add("on");
    }
  }

  function nextSlider() {
    hideSlider();
    currentSlide = (currentSlide + 1) % sliders.length;
    showSlider();
  }

  function prevSlider() {
    hideSlider();
    currentSlide = (currentSlide - 1 + sliders.length) % sliders.length;
    showSlider();
  }

  if (btnNext) {
    btnNext.addEventListener("click", nextSlider);
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", prevSlider);
  }

  function autoSlide() {
    nextSlider();
  }

  // Intervalo de tempo para troca automática de slides (3 segundos)
  setInterval(autoSlide, 3000);

  // Mostrar o primeiro slider ao carregar a página
  showSlider();
});


