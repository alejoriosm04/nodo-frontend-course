const words = ["apple", "banana", "cherry", "grape", "orange", "strawberry", "watermelon"];

function chooseRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function initializeGame() {
    const wordToGuess = chooseRandomWord();
    let guessesRemaining = 6; 
    const guessedLetters = [];
    let wordDisplay = "_".repeat(wordToGuess.length);

    console.log("Welcome to Hangman!");
    console.log("Try to guess the word.");
    console.log("Word to guess: " + wordDisplay);

    function updateWordDisplay() {
        let display = "";
        for (let i = 0; i < wordToGuess.length; i++) {
            if (guessedLetters.includes(wordToGuess[i])) {
                display += wordToGuess[i];
            } else {
                display += "_";
            }
        }
        return display;
    }

    function isGameWon() {
        return wordDisplay === wordToGuess;
    }

    function isGameLost() {
        return guessesRemaining === 0;
    }

    while (true) {
        const guess = prompt("Guess a letter or the whole word:").toLowerCase();

        if (guess.length === 1 && /[a-z]/.test(guess)) {
            if (guessedLetters.includes(guess)) {
                console.log("You already guessed that letter.");
            } else if (wordToGuess.includes(guess)) {
                guessedLetters.push(guess);
                wordDisplay = updateWordDisplay();
                console.log("Correct guess!");
                console.log("Word to guess: " + wordDisplay);

                if (isGameWon()) {
                    console.log("Congratulations! You won!");
                    break;
                }
            } else {
                guessedLetters.push(guess);
                guessesRemaining--;
                console.log("Incorrect guess. Guesses remaining: " + guessesRemaining);
            }
        } else if (guess.length === wordToGuess.length && /^[a-z]+$/.test(guess)) {
            if (guess === wordToGuess) {
                console.log("Congratulations! You won!");
            } else {
                console.log("Incorrect word guess.");
                guessesRemaining--;
                console.log("Guesses remaining: " + guessesRemaining);
            }
        } else {
            console.log("Invalid input. Please enter a single letter or the entire word.");
        }

        if (isGameLost()) {
            console.log("You ran out of guesses. The word was: " + wordToGuess);
            break;
        }
    }
}

initializeGame();
