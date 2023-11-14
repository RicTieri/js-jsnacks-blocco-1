const wrapperElement = document.querySelector('div.wrapper');

for ( let i = 1; i < 7; i++ ){
  const cardElement = document.createElement('div');
  cardElement.className = 'card';

  const headingCardElement = document.createElement('h2');
  headingCardElement.innerHTML = i;

  cardElement.appendChild(headingCardElement);
  wrapperElement.appendChild(cardElement);

  if ( i % 2 === 0 ){   
      headingCardElement.classList.add("green")
  } else {    
    headingCardElement.classList.add("yellow")
  }
}

