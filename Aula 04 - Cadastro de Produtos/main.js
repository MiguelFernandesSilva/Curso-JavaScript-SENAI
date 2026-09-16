'use strict';

const botaoCadastrar = document.getElementById('submitBtn');
let contadorCodigo = 1;

function cadastrarProduto() {

    const tabela = document.querySelector('#table tbody');

    const caixaProduto = document.getElementById('productName');
    const caixaQnt = document.getElementById('productQuant');
    const caixaPreco = document.getElementById('productValue');

    const newLine = document.createElement('tr');

    const tdCodigo = document.createElement('td');
    tdCodigo.textContent = contadorCodigo++;

    const tdNome = document.createElement('td');
    tdNome.textContent = caixaProduto.value;

    const tdQtd = document.createElement('td');
    tdQtd.textContent = caixaQnt.value;

    const tdPreco = document.createElement('td');
    tdPreco.textContent = caixaPreco.value;

    newLine.append(tdCodigo);
    newLine.append(tdNome);
    newLine.append(tdQtd);
    newLine.append(tdPreco);

    tabela.appendChild(newLine);

    caixaProduto.value = '';
    caixaQnt.value = '';
    caixaPreco.value = '';
}

botaoCadastrar.addEventListener('click', cadastrarProduto);