import { prompt } from "./prompt.js";

const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const guessNumner = () => {
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

  let attempts = 0;

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
      break;
    }
  }

  if (attempts >= 10) {
    console.log("Game over! You exceeded 10 attempts. 😔");
  }
};

guessNumner();
