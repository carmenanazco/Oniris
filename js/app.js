/*document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      emailjs.sendForm('SERVICE_ID_DE_EJEMPLO', 'TEMPLATE_ID_DE_EJEMPLO', this)
        .then(() => {
          alert('¡Mensaje enviado con éxito! ✅');
          this.reset();
        }, (error) => {
          alert('Ocurrió un error. ❌ Por favor, intentá más tarde.');
          console.error(error);
        });
    });*/

    const scrollBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.querySelector(".stars");
    const totalStars = 50; // 🌟 Cambiá este número para más estrellas

    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // Tamaño entre 3px y 8px
      const size = Math.random() * 5 + 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Posición aleatoria
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Velocidad aleatoria
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;

      starsContainer.appendChild(star);
    }
  });

