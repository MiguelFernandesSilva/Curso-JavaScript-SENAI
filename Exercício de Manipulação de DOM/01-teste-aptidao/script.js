'use strict'

const botao = document.getElementById('btnAvaliar');

function avaliarAptidao(){
    const resultado = document.getElementById('divResultado');
    const tempo = Number(document.getElementById('tempo').value);

    const resposta = document.createElement('p');

    resultado.textContent = '';

    if (tempo <= 14 && tempo > 0){
        resposta.textContent = 'Apto';
        resposta.classList = 'apto';
    } else if(tempo <= 0) {
        resposta.textContent = 'Tempo impossível';
        resposta.style.fontWeight = 'bold';
    } else {
        resposta.textContent = 'Não apto';
        resposta.classList = 'nao-apto';
    }

    resultado.append(resposta);
}

botao.addEventListener('click', avaliarAptidao);