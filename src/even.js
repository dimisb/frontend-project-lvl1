import readlineSync from 'readline-sync';
import { isEven, getRandomInt } from './math.js';

const correctAnswer = (number) => {
  if (isEven(number)) return 'yes';
  return 'no';
};

export default () => {
  let i = 0;
  let succesCount = 0;
  let number = 0;
  let answer = '';
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  do {
    number = getRandomInt(1, 21);
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer(number)) {
      succesCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(number)}'. \nLet's try again, ${name}!`);
    }
    i += 1;
  } while (answer === correctAnswer(number) && i < 3);
  if (succesCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
