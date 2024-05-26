// script.js

document.addEventListener("DOMContentLoaded", () => {
    const maxAttempts = 3;
    let attemptsLeft = maxAttempts;
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    const guessInput = document.getElementById("guessInput");
    const submitGuess = document.getElementById("submitGuess");
    const feedback = document.getElementById("feedback");
    const attemptsLeftDisplay = document.getElementById("attemptsLeft");
  
    attemptsLeftDisplay.textContent = `Attempts left: ${attemptsLeft}`;
  
    submitGuess.addEventListener("click", () => {
      const userGuess = parseInt(guessInput.value);
  
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        feedback.textContent = "Please enter a valid number between 1 and 50.";
        feedback.style.color = "red";
        return;
      }
  
      attemptsLeft--;
  
      if (userGuess === randomNumber) {
        feedback.textContent = "Congratulations! You guessed the correct number!";
        feedback.style.color = "green";
        submitGuess.disabled = true;
      } else if (attemptsLeft > 0) {
        feedback.textContent = userGuess < randomNumber ? "Too low!" : "Too high!";
        feedback.style.color = "orange";
        attemptsLeftDisplay.textContent = `Attempts left: ${attemptsLeft}`;
      } else {
        feedback.textContent = `Game over! The correct number was ${randomNumber}.`;
        feedback.style.color = "red";
        submitGuess.disabled = true;
        attemptsLeftDisplay.textContent = "No attempts left.";
      }
  
      guessInput.value = "";
    });
  });
  
