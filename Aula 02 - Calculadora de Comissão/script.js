const plus = document.getElementById('soma');
const minus = document.getElementById('sub');
const multi = document.getElementById('multi');
const division = document.getElementById('div');

let result = 0;

const visor = document.getElementById('visor');

function soma() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);

    result = num1 + num2;
    visor.textContent = result;
}
function sub() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);

    result = num1 - num2;
    visor.textContent = result;
}
function mult() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);

    result = num1 * num2;
    visor.textContent = result;
}
function div() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);

    result = num1 / num2;
    visor.textContent = result;
}

plus.addEventListener('click', soma);
minus.addEventListener('click', sub);
multi.addEventListener('click', mult);
division.addEventListener('click', div);