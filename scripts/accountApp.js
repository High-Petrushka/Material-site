const login = document.getElementById('nickname');
const birthday = document.getElementById('birth');
const gender = document.getElementById('gender');

const testRes = document.getElementById('test-res');

const logOutBtn = document.getElementById('logout-btn');
const accountBtn = document.getElementById('account-btn');

const exitBtn = document.getElementById('exit-btn');

login.innerText = `${sessionStorage.getItem('userLogin')}`;
birthday.innerText = `${sessionStorage.getItem('userBirth')}`;
gender.innerText = `${sessionStorage.getItem('userGender')}`;

if (sessionStorage.getItem('testResult')) {
    testRes.innerText = `${sessionStorage.getItem('testResult')}`;
} else {
    testRes.innerText = `0 / 6`;
}

accountBtn.innerText = `${sessionStorage.getItem('userLogin')}`;

logOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.replace('./index.html');
});

exitBtn.addEventListener('click', () => {
    window.location.replace('./index.html');
    /* sessionStorage.clear(); */
});