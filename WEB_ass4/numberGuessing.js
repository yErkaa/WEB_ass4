let randomNumber;

function startGuessingGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    let userGuess = prompt("Guess a number between 1 and 100");

    while (userGuess !== null) {
        if (isNaN(userGuess)) {
            userGuess = prompt("Please enter a valid number.");
        } else if (userGuess < randomNumber) {
            userGuess = prompt("Too low! Try again:");
        } else if (userGuess > randomNumber) {
            userGuess = prompt("Too high! Try again:");
        } else {
            alert("Congratulations! You guessed the correct number.");
            break;
        }
    }
}
