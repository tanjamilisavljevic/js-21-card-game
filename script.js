

function addCardStyling(element) {
    document.getElementById(element).classList.add('card');
}

document.getElementById('drawButton').addEventListener('click', function () {

    function getRandomCard(max) {
        return Math.floor(Math.random() * max + 1);
    }

    let card1 = getRandomCard(14);
    let card2 = getRandomCard(14);

    document.getElementById("card1").textContent = '' + card1;
    document.getElementById("card2").textContent = '' + card2;

    addCardStyling('card1');
    addCardStyling('card2');


    if (card1.value + card2.value === 21) {
        alert("You win")
    } else {
        alert("You lose")
    }
})
