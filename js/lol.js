document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".slider__btn_prev");
    const nextButton = document.querySelector(".slider__btn_next");
    const sliderWrapper = document.querySelector(".slider__slides");

    function updateButtonsVisibility() {
        let visibleWidth = sliderWrapper.clientWidth;

        // Показываем или скрываем кнопку "Назад"
        if (sliderWrapper.scrollLeft > 0) {
            prevButton.style.display = "block";
        } else {
            prevButton.style.display = "none";
        }

        // Показываем или скрываем кнопку "Вперед"
        if (sliderWrapper.scrollLeft + visibleWidth < sliderWrapper.scrollWidth) {
            nextButton.style.display = "block";
        } else {
            nextButton.style.display = "none";
        }
    }

    // Инициализируем видимость кнопок при загрузке
    updateButtonsVisibility();

    // Обработчик для кнопки "Вперед"
    nextButton.addEventListener("click", function() {
        let visibleWidth = sliderWrapper.clientWidth;

        sliderWrapper.scrollBy({
            left: visibleWidth * 0.8, // Изменил на 0.8 для большей части прокрутки
            behavior: "smooth"
        });

        // После асинхронной прокрутки обновляем видимость кнопок
        setTimeout(updateButtonsVisibility, 250); // Задержка, чтобы дать время на прокрутку
    });

    // Обработчик для кнопки "Назад"
    prevButton.addEventListener("click", function() {
        let visibleWidth = sliderWrapper.clientWidth;

        sliderWrapper.scrollBy({
            left: -visibleWidth * 0.8, // Та же корректировка для обратной прокрутки
            behavior: "smooth"
        });

        // После асинхронной прокрутки обновляем видимость кнопок
        setTimeout(updateButtonsVisibility, 250); // Задержка аналогично
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.dns-today__big-num');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 100;

            if (count < target) {
                // Увеличиваем текущее значение и обновляем его в элементе
                counter.innerText = Math.ceil(count + increment);
                // Планируем следующий кадр анимации
                requestAnimationFrame(updateCount);
            } else {
                // Убедимся, что не превысим конечное значение
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
