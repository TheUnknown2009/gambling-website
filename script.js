// Initialize player coins
let playerCoins = 100; // Starting coins

// Update coin balance on screen
function updateCoinBalance() {
    document.getElementById('coin-balance').innerText = playerCoins;
}

// Coin Flip Game Functionality
function flipCoin(choice) {
    if (playerCoins <= 0) {
        alert("You don't have enough coins!");
        return;
    }

    // Deduct 1 coin for each bet
    playerCoins--;

    // Show the coin flip animation
    document.getElementById('coin-animation').style.visibility = 'visible';
    document.getElementById('coin-img').style.transform = 'rotateY(720deg)';

    setTimeout(() => {
        // Reset coin rotation and determine result
        document.getElementById('coin-img').style.transform = 'rotateY(0deg)';
        const result = Math.random() < 0.5 ? 'heads' : 'tails';
        const message = choice === result ? 'You win!' : 'You lose!';
        document.getElementById('coin-result').innerText = `Coin landed on ${result}. ${message}`;

        // Update coin balance
        if (choice === result) {
            playerCoins += 2; // Player wins 2 coins
        }
        updateCoinBalance();
    }, 1000); // Wait for 1 second before showing the result
}

// Dice Roll Game Functionality
function rollDice() {
    if (playerCoins <= 0) {
        alert("You don't have enough coins!");
        return;
    }

    // Deduct 1 coin for each bet
    playerCoins--;

    const userBet = parseInt(document.getElementById('dice-bet').value);
    if (userBet < 1 || userBet > 6 || isNaN(userBet)) {
        alert('Please enter a number between 1 and 6!');
        return;
    }

    // Show dice roll animation
    const diceElements = document.querySelectorAll('.dice');
    diceElements.forEach(dice => {
        dice.style.opacity = 1;
        dice.classList.add('dice-roll-animation');
    });

    setTimeout(() => {
        // Remove animation and roll the dice
        diceElements.forEach(dice => dice.classList.remove('dice-roll-animation'));
        const diceResult = Math.floor(Math.random() * 6) + 1;
        const message = userBet === diceResult ? 'You win!' : 'You lose!';
        document.getElementById('dice-result').innerText = `Dice landed on ${diceResult}. ${message}`;

        // Update coin balance
        if (userBet === diceResult) {
            playerCoins += 6; // Player wins 6 coins
        }
        updateCoinBalance();
    }, 1000); // Wait for 1 second before showing the result
}

// Initialize coin balance display
updateCoinBalance();
