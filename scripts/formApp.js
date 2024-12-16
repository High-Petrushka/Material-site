const logInForm = document.getElementById('login');

const logInBtn = document.getElementById('login-btn');

function listMaker(obj) {
    let list = new Array;

    for (i of obj) {
        list.push(i);
    }

    return list;
}

const errors = listMaker(document.getElementsByClassName('error-box'));

const nameError = errors.slice(0, 3);
const birthError = errors.slice(3);

const nameInp = logInForm.elements.name;
const birthInp = logInForm.elements.birth;

function showError(error) {
    error.style.height = '25px';
    error.style.margin = '10px 0 0 0';
}

logInBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let enter = 0;

    const userName = logInForm.elements.name;
    const birthDay = logInForm.elements.birth;
    const gender = logInForm.elements.gender;

    if (userName.validity.valid) {
        enter++
    } else {
        let nameValue = userName.value;

        if (nameValue == '') {
            showError(nameError[0]);
        } else if (nameValue.length < 4) {
            showError(nameError[1]);
        } else {
            showError(nameError[2]);
        }
    }

    if (birthDay.validity.valid) {
        enter++;
    } else {
        let year = birthDay.value.slice(0, 4);

        if (year == '') {
            showError(birthError[0]);
        } else if (Number(year) < 1950) {
            showError(birthError[1]);
        } else {
            showError(birthError[2]);
        }
    }

    if (enter === 2) {

        if (sessionStorage.length > 0) {
            sessionStorage.clear();
        }

        sessionStorage.setItem('userLogin', userName.value);
        sessionStorage.setItem('userBirth', birthDay.value);
        sessionStorage.setItem('userGender', gender.value);

        logInForm.reset();

        window.location.replace('./about.html')
    }
});

nameInp.addEventListener('input', () => {
    for (i of nameError) {
        i.style.height = '0';
        i.style.margin = '0 0 0 0';
    }
});

birthInp.addEventListener('input', () => {
    for (i of birthError) {
        i.style.height = '0';
        i.style.margin = '0 0 0 0';
    }
});