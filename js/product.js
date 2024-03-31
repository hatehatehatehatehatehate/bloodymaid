document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    let slides = document.querySelectorAll('.product-image-slider img');
    let slideInterval = setInterval(nextSlide, 8000); // Устанавливаем интервал перелистывания

    // Функция для показа конкретного слайда
    function showSlides(n) {
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        slides.forEach(slide => slide.style.display = "none"); // Скрываем все слайды
        slides[slideIndex - 1].style.display = "block"; // Показываем нужный слайд
    }

    // Функция для перехода к следующему слайду
    function nextSlide() {
        showSlides(slideIndex += 1);
    }

    // Функция для перехода к предыдущему слайду
    function prevSlide() {
        showSlides(slideIndex -= 1);
    }

    // Обнуление и перезапуск интервала перелистывания
    function resetSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 8000);
    }

    // Перелистывание при нажатии на кнопки
    document.querySelector('.next').addEventListener('click', function() {
        nextSlide();
        resetSlideInterval();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        prevSlide();
        resetSlideInterval();
    });

    showSlides(slideIndex); // Показываем первый слайд при загрузке
});
