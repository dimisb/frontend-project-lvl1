import readlineSync from 'readline-sync';
import { isEven, getRandomInt } from '../math.js';
import { gameRounds, maxRandom } from '../index.js';

const correctAnswer = (question) => {
  if (isEven(question)) return 'yes';
  return 'no';
};

export default () => {
  let i = 0;
  let succesCount = 0;
  let question = 0;
  let answer = '';
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  do {
    question = getRandomInt(1, maxRandom);
    console.log(`Question: ${question}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer(question)) {
      succesCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)}'. \nLet's try again, ${name}!`);
    }
    i += 1;
  } while (answer === correctAnswer(question) && i < gameRounds);
  if (succesCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
