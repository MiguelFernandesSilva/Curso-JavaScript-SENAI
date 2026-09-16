'use strict'

function calcularDesconto(){
    const preco = Number(document.getElementById('precoOriginal').value);
    const desconto = Number(document.getElementById('desconto').value);

    const caixaResposta = document.getElementById('resultado');
    caixaResposta.textContent = '';

    const precoFinal = preco - (preco * (desconto * 0.01));

    const resultado = document.createElement('p');
    resultado.textContent = `O preço final é: ${precoFinal}`;
    resultado.style.fontWeight = 'bold';

    if(desconto <= 5) {
        resultado.style.color = '#14532d';
    } else if (desconto > 5 && desconto < 10) {
        resultado.style.color = '#713f12';
    } else {
        resultado.style.color = '#7f1d1d';
    }

    caixaResposta.append(resultado);
};