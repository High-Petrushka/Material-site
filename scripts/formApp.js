const logInForm = document.getElementById('login');

const logInBtn = document.getElementById('login-btn');

logInBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let enter = 0;

    const userName = logInForm.elements.name;
    const birthDay = logInForm.elements.birth;
    const gender = logInForm.elements.gender;

    if (userName.validity.valid) {
        console.log('Name is valid');
        enter++
    } else {
        let nameValue = userName.value;

        if (nameValue == '') {
            console.log('Is not filled!');
        } else if (nameValue.length < 4) {
            console.log('Too short!');
        } else {
            console.log('Unacceptable signs!');
        }
    }

    if (birthDay.validity.valid) {
        console.log('Date is valid');
        enter++;
    } else {
        let year = birthDay.value.slice(0, 4);

        if (year == '') {
            console.log('Is not filled!');
        } else if (Number(year) < 1950) {
            console.log('Too old!');
        } else {
            console.log('Too yang!');
        }
    }

    if (enter === 2) {
        console.log(userName.value);
        console.log(birthDay.value);
        console.log(gender.value);

        logInForm.reset();
    }
});