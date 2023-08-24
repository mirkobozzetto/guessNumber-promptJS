import { prompt } from "./prompt.js";

let totalWins = 0;
let totalAttempts = 0;

const startGame = () => {
  let playAgain = "y";
  while (playAgain === "y") {
    guessNumber();
    playAgain = prompt("Want to play again? (y/n): ").toLowerCase();
  }
  console.log(
    `Thanks for playing! You won ${totalWins} times in ${totalAttempts} attempts! 🎮`
  );
};

const guessNumber = () => {
  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let attempts = 0;

  console.log(`
  Welcome to the Number Guessing Game! 🎮
  Rules:
  1. The system will generate a random number between 1 and 100.
  2. Your task is to guess this number.
  3. Enter a number when prompted.
  4. If your guess is too high or too low, you'll be notified, and you can guess again.
  5. The game continues until you guess the correct number or exceed 10 attempts.

  Let's get started! 🚀
  `);

  while (attempts < 10) {
    const userInput = prompt(`Attempt ${attempts + 1}: Guess a number: `);
    const userGuess = parseInt(userInput);

    if (isNaN(userGuess)) {
      console.log("That's not a valid number. Try again.");
    } else if (userGuess > randomNumber) {
      console.log("Your guess is too high! 📈");
      attempts++;
    } else if (userGuess < randomNumber) {
      console.log("Your guess is too low! 📉");
      attempts++;
    } else {
      console.log(
        `Congratulations! You guessed the correct number in ${
          attempts + 1
        } attempts! 🎉`
      );
      totalWins++;
      totalAttempts += attempts + 1;
      break;
    }
  }

  if (attempts >= 10) {
    console.log("Game over! You exceeded 10 attempts. 😔");
  }
};

startGame();
