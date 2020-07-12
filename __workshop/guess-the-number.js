const inquirer = require('inquirer');

const hiddenNumber = Math.round(Math.random()*99+1);
let guess = 0;

const guessingGame = () => {
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'number',
        message: 'Guess the number',
        name: 'guess',
    }
  ])
  .then(answers => {
    if (answers.guess.toString() === 'NaN') {
        console.log("That's not a number! Try again");
        guessingGame();
    } else if (answers.guess === hiddenNumber) {
        console.log(`That's correct, it's your lucky day!`);
    } else if (guess === 4) {
        console.log(`Sorry, the number was ${hiddenNumber}. Better luck next time.`)
    } else {
        guess++;
        if (answers.guess > hiddenNumber) console.log(` Wrong, try a little lower! (${5-guess} guess(es) remaining)`)
        if (answers.guess < hiddenNumber) console.log(` Wrong, try a little higher! (${5-guess} guess(es) remaining)`)
        guessingGame()
    }
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
}
guessingGame();