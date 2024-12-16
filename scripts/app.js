// Плучаем перечень всех элементов с классом 'label'
const accordion = document.getElementsByClassName('label');

const logOutBtn = document.getElementById('logout-btn');
const accountBtn = document.getElementById('account-btn');

// Отлавливаем нажатия на первый элемент из реестра
accordion[0].addEventListener('click', () => {
    // Добавляем или убираем класс 'active'
    accordion[0].classList.toggle('active');

    /*
    При первом срабатывании метод 'toggle'
    будет дабовять к списку классов элемента
    передонное в качестве параметра значение.
    Повторное же использование приведёт к
    исключению этого класса.
    */
});

accordion[1].addEventListener('click', () => {
    accordion[1].classList.toggle('active');
});

accordion[2].addEventListener('click', () => {
    accordion[2].classList.toggle('active');
});

accordion[3].addEventListener('click', () => {
    accordion[3].classList.toggle('active');
});

accountBtn.innerText = `${sessionStorage.getItem('userLogin')}`;

logOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.replace('./index.html');
});