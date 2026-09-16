'use strict'

const button = document.getElementById('subBtn');

function createCard(){
    const container = document.getElementById('container');

    const image = document.getElementById('image');
    const name = document.getElementById('name');
    const cargo = document.getElementById('cargo');

    const card = document.createElement('div');

    const userName = document.createElement('h3');
    userName.textContent = name.value;

    const userCargo = document.createElement('p');
    userCargo.textContent = cargo.value;

    const userImage = document.createElement('img');
    userImage.src = image.value;

    container.append(card);
    card.className = 'card';

    card.append(userImage);
    card.append(userName);
    card.append(userCargo);
};

button.addEventListener('click', createCard);