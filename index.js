document.querySelector('main').remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "Reid is the champion";

document.body.append(newHeader);