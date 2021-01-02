import readlineSync from 'readline-sync';
import { gcd, getRandomInt } from '../math.js';
import { gameRounds, maxRandom } from '../index.js';

const correctAnswer = (question) => gcd(...question);

export default () => {
  let i = 0;
  let succesCount = 0;
  let question = [];
  let answer = '';
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  do {
    question = [getRandomInt(1, maxRandom), getRandomInt(1, maxRandom)];
    console.log(`Question: ${question[0]} ${question[1]}`);
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
