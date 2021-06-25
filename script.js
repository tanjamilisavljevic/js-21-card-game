const cardSymbols =['♠', '♣', '♥', '♦']
function getRandomSymbol() {
    let randomIndex = Math.floor(Math.random() * cardSymbols.length);
    return cardSymbols[randomIndex]}


function addCardStyling(element) {
    document.getElementById(element).classList.add('card');
}

document.getElementById('drawButton').addEventListener('click', function () {

    function getRandomCard(max) {
        return Math.floor(Math.random() * max + 1);
    }

    let card1text = getRandomCard(14);
    let card2text = getRandomCard(14);

    document.getElementById("card1text").textContent = '' + card1text;
    document.getElementById("randomSymbol1").innerHTML = getRandomSymbol();
    document.getElementById("card2text").textContent = '' + card2text;
    document.getElementById("randomSymbol2").innerHTML = getRandomSymbol();

    addCardStyling('card1');
    addCardStyling('card2');


    if (card1text.value + card2text.value === 21) {
        alert("You win")
    } else {
        alert("You lose")
    }
})
