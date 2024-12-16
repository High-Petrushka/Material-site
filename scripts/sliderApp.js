// Переменнная, отслеживающая порядок следлвания слайдов
let order = 0;

// Получаем массив всех элементов слайдера
const frames = document.getElementsByClassName('frame');


// Получаем элементы кнопок слайдера
const rightBtn = document.getElementById('right');
const leftBtn = document.getElementById('left');

// Получаем поле, содержащее порядковые номера слайдов
const frameCounter = document.getElementById('counter');

const logOutBtn = document.getElementById('logout-btn');
const accountBtn = document.getElementById('account-btn');


// Добавляем кнопкам логику событий срабатывания
/*
Во избежании "зацикливания" слайдера, выполняем действие по понажатию
каждой из кнопок лишь в том случае, если значение переменной "order"
находится в диапазоне от 0 до n - 1 (где n - кол-во элементов сладера)
*/

rightBtn.addEventListener('click', () => {
    if (order < frames.length - 1) {
        // Увеличиваем значение переменной на один шаг
        order++;

        // Перемещаем элементы слайдера на 1000px (длина одного элемента) влево
        document.documentElement.style.setProperty('--slider-transf', `-${order * 1000}px`);

        // Обновляем содержимое счётчика
        frameCounter.innerText = `${order + 1} / 5`;
    }
});

leftBtn.addEventListener('click', () => {
    if (order > 0) {
        // Уменьшаем значение переменной на один шаг
        order--;

        // Перемещаем элементы слайдера на 1000px (длина одного элемента) вправо
        document.documentElement.style.setProperty('--slider-transf', `-${order * 1000}px`);

        // Обновляем содержимое счётчика
        frameCounter.innerText = `${order + 1} / 5`;
    }
});

accountBtn.innerText = `${sessionStorage.getItem('userLogin')}`;

logOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.replace('./index.html');
});