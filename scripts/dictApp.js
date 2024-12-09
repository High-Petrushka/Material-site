// Хеш, содержащий термины и их определения
const wordList = {
    'Color role':
        'Like the "numbers" on a paint-by-number canvas, color roles are assigned to specific UI elements. They have names like primary, on primary, and primary container. The same color role is used for both light and dark themes.',
    'Dynamic color':
        'Dynamic color takes a single color from a user`s wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.',
    'Static color':
        'UI colors that don`t change based on the user`s wallpaper or in-app content. Once assigned to their respective color roles and UX elements, the colors remain constant.',
    'Baseline color':
        'The default static color scheme for Material products. It includes colors for both light and dark themes.',
    'Column':
        'One or more vertical blocks of content within a pane.',
    'Drag handle':
        'The component that resizes panes.',
    'Fold':
        'On foldable devices, a flexible area of the screen or, on dual-screen devices, a hinge that separates two displays.',
    'Margin':
        'The space between the edge of the screen and any elements inside of it.',
    'Multi-window mode':
        'Enables multiple apps to share the same screen simultaneously.',
    'Pane':
        'A layout container that houses other components and elements within a single app. A pane can be: fixed, flexible, floating, or semi permanent.',
    'Spacer':
        'The space between two panes.',
    'Window size class':
        'Opinionated breakpoint, the window size at which a layout needs to change to match available space, device conventions, and ergonomics.'
};

// Получаем элемент активного списка терминов
const activeList = document.getElementById('show');

// Получаем элемент поля поиска
const termSeaech = document.getElementById('search');

// Получаем элемент поля вывода объяснения
const explanation = document.getElementById('explain');

// Функция для компановки нового списка терминов
function listMaker(obj) {
    // Преобразуем пустой массив
    let newList = new Array();

    // Проходимся по элементам переданного объекта
    for (i of obj) {
        // Заполняем список элементами объекта
        newList.push(i);
    }

    return newList;
}

// Функция для постановки объяснения термина в указанное место
function explain(terms, place) {
    // Применяем ко всем элементами списка колбэк-функцию
    terms.forEach(item => {
        // Добавляем обработчик события "нажатия" для каждого термина
        item.addEventListener('click', () => {
            // Подстявляем термин и его значение в указанное место
            place.innerHTML = `<b>${item.innerText}</b> - ${wordList[item.innerText]}`;
        });
    });
}

// Создаём первичный реестр терминов, обратившись к именам ключей хеш-таблицы
Object.keys(wordList).forEach(item => {
    // Создаём новый элемент в HTML-разметке
    let newTerm = document.createElement('term');
    // Заполняем ново-созданный элемент именем ключа (термином)
    newTerm.innerText = item;
    // Добавляем элемент в поле вывода терминов
    activeList.appendChild(newTerm);
});

// Выводим пояснение к первому термину в ассоциативном-массиве (по-умолчанию)
explain(listMaker(activeList.children), explanation);

// Добавляем обработчик события ввода текста в поле поиска
termSeaech.addEventListener('input', () => {
    // Очищаем прежний список терминов
    activeList.innerHTML = '';

    // Сопоставляем введённый текст с содержимым реестра терминов
    Object.keys(wordList).forEach(item => {
        // При наличии совпадений, добавляем элемент в новый список
        if (item.toLowerCase().includes(termSeaech.value.toLowerCase())) {
            let newTerm = document.createElement('term');
            newTerm.innerText = item;
            activeList.appendChild(newTerm);
        }
    });

    // Добавляем возможность вывода значений терминов
    let terms = listMaker(activeList.children);
    explain(terms, explanation);
});

