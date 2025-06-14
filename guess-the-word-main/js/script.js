const guessedLettersElement = document.querySelector(".guessed-letter");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again")

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●")
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText ="";
    const guess = letterInput.value;
    const goodGuess = acceptInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
        letterInput.value = "";
});

const acceptInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0 ) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z."
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase ();
    if (guessedLettersElement.includes(guess)) {
        message.innerText = "You already guessed that letter, silly. Try again.";
    } else {
        guessedLettersElement.push(guess);
        console.log(guessedLetters)
    }
};