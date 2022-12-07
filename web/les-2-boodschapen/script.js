console.log("script is geladen")

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetInfruitLa(fruit){
    console.log('fruit');

    const nieuwElement = document.createElement(h2);
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}

function zetInGroenteLa(groente){
    console.log('groente');
    const nieuwElement = document.createElement(h2);
    nieuwElement.innerHTML = groente;
    nieuwElement.className = 'green';
    fruitvak.appendChild(nieuwElement);
}