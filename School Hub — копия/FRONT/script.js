let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
  items.forEach((item, index) => {
    const angle = (index - currentIndex) * 40;
    item.style.transform = `rotateY(${angle}deg) translateZ(300px)`;
    item.style.opacity = index === currentIndex ? '1' : '0.5';

    // Збільшуємо центральний елемент
    if (index === currentIndex) {
      item.style.transform += ' scale(1.5)';
    } else {
      item.style.transform += ' scale(1)';
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

// Ініціалізація
updateCarousel();
