
function getRandomSymbol() {
    let randomIndex = Math.floor(Math.random() * cardSymbols.length);
    return cardSymbols[randomIndex]
}

function addCardStyling(element) {
    document.getElementById(element).classList.add('card');
}

const cardSymbols = ['♠', '♣', '♥', '♦']

document.getElementById('drawButton').addEventListener('click', function () {
    fetch('api.json')
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(playGame)
});
function shuffle(cards) {
    cards.sort(() => Math.random() - 0.5);
}

function draw(cards) {
    return cards.pop();
}

function playGame(cards) {

    shuffle(cards)

    const card1 = draw(cards);
    const card2 = draw(cards);

    document.getElementById("card1text").textContent = '' + card1.name;
    document.getElementById("randomSymbol1").innerHTML = getRandomSymbol();
    document.getElementById("card2text").textContent = '' + card2.name;
    document.getElementById("randomSymbol2").innerHTML = getRandomSymbol();

    addCardStyling('card1');
    addCardStyling('card2');


    if (card1.value + card2.value === 21) {
        alert("You win")
    } else {
        alert("You lose")
    }
}
