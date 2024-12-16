const resultBtn = document.getElementById('result-btn');
const repeatBtn = document.getElementById('repeat-btn');

let totalResult = 0;

const writeAnsw = document.getElementsByClassName('answ-box');
const testAnsw = document.getElementsByClassName('test-answ');

const output = document.getElementById('total');

const rightAnsw = document.getElementsByClassName('right-answ-box');

const rightCheck = document.getElementsByClassName('right-check');
const wronCheck = document.getElementsByClassName('wrong-check');

const shield = document.getElementById('protector');

const logOutBtn = document.getElementById('logout-btn');
const accountBtn = document.getElementById('account-btn');

function collectWrite(forms) {
    let points = 0;
    let rightInd = new Array;
    let wrongInd = new Array;

    for (i = 0; i < forms.length; i++) {
        let answ = forms[i].elements[`write${i}`].value.toLowerCase();
        if (answ === '2014' || answ === 'google') {
            points++;
            rightInd.push(i);
        } else {
            wrongInd.push(i);
        }
    }

    return [points, rightInd, wrongInd];
}

function collectTest(forms) {
    let points = 0;
    let rightInd = new Array;
    let wrongInd = new Array;

    for (i = 0; i < forms.length; i++) {
        let answ = forms[i].elements[`test${i}`].value;
        if (answ === '1') {
            points++;
            rightInd.push(i + 2);
        } else {
            wrongInd.push(i + 2);
        }
    }

    return [points, rightInd, wrongInd];
}

function showAnswer(answers) {
    for (i of answers) {
        i.style.height = '50px';
        i.style.padding = '20px 0 0 0';
    }
}

function hideAnswer(answers) {
    for (i of answers) {
        i.style.height = '0'
        i.style.padding = '0 0 0 0'
    }
}

function showCheck(elements, index) {
    for (i = 0; i < index.length; i++) {
        let show = index[i];
        elements[show].style.display = 'block';

        setTimeout(() => {
            elements[show].style.opacity = '1';
        }, 400);
    }
}

function hideCheck(elements, index) {
    for (i = 0; i < index.length; i++) {
        let hide = index[i];
        elements[hide].style.opacity = '0'
        setTimeout(() => {
            elements[hide].style.display = 'none';
        }, 800);
    }
}

function hideWrite(forms) {
    for (i = 0; i < forms.length; i++) {
        forms[i].elements[`write${i}`].value = '';
    }
}

function hideTest(forms) {
    for (i = 0; i < forms.length; i++) {
        forms[i].reset();
    }
}


resultBtn.addEventListener('click', () => {
    const userWrite = collectWrite(writeAnsw);
    const userTest = collectTest(testAnsw);

    showCheck(rightCheck, userWrite[1].concat(userTest[1]));
    showCheck(wronCheck, userWrite[2].concat(userTest[2]));

    showAnswer(rightAnsw);
    shield.style['z-index'] = 2;

    totalResult = userWrite[0] + userTest[0];
    output.innerText = `${totalResult} / 6`;

    sessionStorage.setItem('testResult', `${totalResult} / 6`);
});

repeatBtn.addEventListener('click', () => {
    const userWrite = collectWrite(writeAnsw);
    const userTest = collectTest(testAnsw);

    hideCheck(rightCheck, userWrite[1].concat(userTest[1]));
    hideCheck(wronCheck, userWrite[2].concat(userTest[2]));

    hideWrite(writeAnsw);
    hideTest(testAnsw);

    hideAnswer(rightAnsw);
    shield.style['z-index'] = -1;

    output.innerText = `0 / 6`;

    sessionStorage.removeItem('testResult');
});

accountBtn.innerText = `${sessionStorage.getItem('userLogin')}`;

logOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.replace('./index.html');
});