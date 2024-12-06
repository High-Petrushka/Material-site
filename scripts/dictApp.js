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

const activeList = document.getElementById('show');
const termSeaech = document.getElementById('search');
const explanation = document.getElementById('explain');

function listMaker(obj) {
    let newList = new Array();

    for (i of obj) {
        newList.push(i);
    }

    return newList;
}

function explain(terms, place) {
    terms.forEach(item => {
        item.addEventListener('click', () => {
            explanation.innerHTML = `<b>${item.innerText}</b> - ${wordList[item.innerText]}`;
        });
    });
}

Object.keys(wordList).forEach(item => {
    let newTerm = document.createElement('term');
    newTerm.innerText = item;
    activeList.appendChild(newTerm);
});

explain(listMaker(activeList.children), explanation);

termSeaech.addEventListener('input', () => {
    activeList.innerHTML = '';

    Object.keys(wordList).forEach(item => {
        if (item.toLowerCase().includes(termSeaech.value.toLowerCase())) {
            let newTerm = document.createElement('term');
            newTerm.innerText = item;
            activeList.appendChild(newTerm);
        }
    });

    let terms = listMaker(activeList.children);
    explain(terms, explanation);
});

