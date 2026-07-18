const botaoMensagem = document.getElementById('botao');
const botaoCor = document.getElementById('colorBtn');
const body = document.getElementById('body');

function mostrarMensagem(){
    let nome = document.getElementById('name').value;

    if (nome == 'Davi'){
        alert("Olá, Mundo! Seu nome na verdade é Pietro!");
    } else {
        alert('Olá, Mundo!');
    }
};

function changeColor(){
    let background = document.getElementById('fundo').value.toLowerCase();
    const body = document.getElementById('body');

    document.documentElement.style.setProperty('--color-bg', background);
}

botaoMensagem.addEventListener('click', mostrarMensagem);
botaoCor.addEventListener('click', changeColor);