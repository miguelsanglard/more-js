

function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
}


const redButton = createButton();


const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas)

console.log(comidas)
