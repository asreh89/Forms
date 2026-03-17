let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// First prompt
userGuess = prompt("Guess a number between 1 and 10 (Type 999 to exit):");

while (true) {

    // If user clicks Cancel
    if (userGuess === null) {
        alert("Game cancelled.");
        break;
    }

    // Convert input to a number
    userGuess = Number(userGuess);

    // If user enters 999 → exit without saying "Too high!"
    if (userGuess === 999) {
        alert("Game exited.");
        break;
    }

    // Check for invalid input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        userGuess = prompt("Invalid input. Please enter a number between 1 and 10 (or 999 to exit):");
        continue;
    }

    // Count valid guesses
    attempts++;

    // Compare guess
    if (userGuess < randomNumber) {
        userGuess = prompt("Too low! Guess again:");
    }
    else if (userGuess > randomNumber) {
        userGuess = prompt("Too high! Guess again:");
    }
    else {
        alert(`Congratulations, you've guessed it in ${attempts} tries!!`);
        break;
    }
}