'use strict'

function calcularMedia(){
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);

    const caixaResposta = document.getElementById('resultado');
    caixaResposta.textContent = '';

    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0){
        caixaResposta.textContent = 'Alguma das nota possue um resultado impossível! Confira os valores e digite novamente.';
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    const resposta = document.createElement('p');
    resposta.style.fontWeight = 'bold';

    if (media < 5){
        resposta.textContent = `Aluno reprovado com média ${media.toFixed(2)}`;
        resposta.style.color = '#7f1d1d';
    } else if (media >= 5 && media <= 6.9) {
        resposta.textContent = `Aluno de recuperação com média ${media.toFixed(2)}`;
        resposta.style.color = '#713f12';
    } else if (media >= 7 && media <= 10) {
        resposta.textContent = `Aluno aprovado com média ${media.toFixed(2)}`;
        resposta.style.color = '#14532d';
    } else {
        caixaResposta.textContent = 'Alguma das nota possue um resultado impossível! Confira os valores e digite novamente.';
        return;
    }

    caixaResposta.append(resposta);
}