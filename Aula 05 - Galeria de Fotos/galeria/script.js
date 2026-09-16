'use strict'

const botaoCadastrar = document.getElementById('cadastrar');

function cadastrarFoto(){
    const caixaFoto = document.getElementById('foto');
    const galeria = document.getElementById('galeria');

    const novaImagem = document.createElement('img');
    novaImagem.src = caixaFoto.value;

    galeria.append(novaImagem);
};

botaoCadastrar,addEventListener('click', cadastrarFoto);