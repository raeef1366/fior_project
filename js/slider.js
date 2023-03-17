document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    const prevSlide = slider.querySelector('#prev-slide');
    const nextSlide = slider.querySelector('#next-slide');
  
    let currentSlide = 0;
  
    // Показ первого слайда
    slides[currentSlide].classList.add('current-slide');
  
    // Переход на второй
    function next() {
      slides[currentSlide].classList.remove('current-slide');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('current-slide');
    }
  
    // Переход на прошлый
    function prev() {
      slides[currentSlide].classList.remove('current-slide');
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add('current-slide');
    }
  
    // Добавление листенера кнопки Некст
    nextSlide.addEventListener('click', function() {
      next();
    });
  
    // Добавление листенера кнопки Прев
    prevSlide.addEventListener('click', function() {
      prev();
    });

    //Интервал

    setInterval(function() {
        next();
    }, 3000);

  });
  