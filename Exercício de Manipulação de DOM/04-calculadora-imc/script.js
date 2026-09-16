'use strict'

function calcularIMC(){
    const altura = Number(document.getElementById('altura').value);
    const peso = Number(document.getElementById('peso').value);

    const caixaResposta = document.getElementById('resultado');
    caixaResposta.textContent = '';

    const imc = peso / (altura * altura);

    const resultado = document.createElement('p');
    resultado.style.fontWeight = 'bold';

    if (imc < 18.5) {
        resultado.textContent = 'Abaixo do peso';
        resultado.style.color = '#1e3a5f';
    } else if (imc >= 18.5 && imc <= 24.9){
        resultado.textContent = 'Peso Normal';
        resultado.style.color = '#14532d';
    } else if (imc >= 25 && imc <= 29.9){
        resultado.textContent = 'Sobrepeso';
        resultado.style.color = '#713f12';
    } else if (imc >= 30 && imc <= 34.9){
        resultado.textContent = 'Obesidade grau I';
        resultado.style.color = '#7f1d1d';
    } else if (imc >= 35 && imc <= 39.9){
        resultado.textContent = 'Obesidade grau II';
        resultado.style.color = '#6b0f0f';
    } else if (imc >= 40){
        resultado.textContent = 'Obesidade grau III';
        resultado.style.color = '#450a0a';
    }

    caixaResposta.append(resultado);
}