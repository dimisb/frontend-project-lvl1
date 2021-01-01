import readlineSync from 'readline-sync';
import { calculate, getRandomInt } from '../math.js';
import { gameRounds, maxRandom } from '../index.js';

const correctAnswer = (question) => calculate(question);

const sign = () => {
  const s = getRandomInt(1, 4);
  let result = '';
  switch (s) {
    case 1:
      result = '+';
      break;
    case 2:
      result = '-';
      break;
    default:
      result = '*';
      break;
  }
  return result;
};

export default () => {
  let i = 0;
  let succesCount = 0;
  let question = 0;
  let answer = '';
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  do {
    question = [getRandomInt(1, maxRandom), sign(), getRandomInt(1, maxRandom)];
    console.log(`Question: ${question[0]} ${question[1]} ${question[2]}`);
    answer = readlineSync.question('Your answer: ');
    if (+answer === correctAnswer(question)) {
      succesCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)}'. \nLet's try again, ${name}!`);
    }
    i += 1;
  } while (+answer === correctAnswer(question) && i < gameRounds);
  if (succesCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
