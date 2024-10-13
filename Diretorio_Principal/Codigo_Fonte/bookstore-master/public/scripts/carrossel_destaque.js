document.addEventListener("DOMContentLoaded", function () {
  // Carrossel
  const slides = document.querySelectorAll(".carrossel-imagens .slider");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);

  // Chat
  const socket = io();

  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const messages = document.getElementById("messages");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
      socket.emit("chat message", input.value);
      input.value = "";
    }
  });

  socket.on("chat message", function (msg) {
    const item = document.createElement("div");
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Cadastro
  document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch("/cadastro", {
      method: "POST",
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      Toastify({
        text: data.message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: data.type === "success" ? "green" : "red",
      }).showToast();
      
      if(data.type === "success") {
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }
    })
    .catch(error => {
      console.error("Erro ao cadastrar:", error);
      Toastify({
        text: "Erro ao cadastrar",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast();
    });
  });
});
