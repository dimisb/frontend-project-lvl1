import readlineSync from 'readline-sync';
import { gcd, getRandomInt } from '../math.js';
import { gameRounds, maxRandom } from '../index.js';

let question = [];
let answer = '';

const giveGameObjective = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const correctAnswer = (q) => gcd(...q);

const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
  return answer;
};

const askQuestion = () => {
  question = [getRandomInt(1, maxRandom), getRandomInt(1, maxRandom)];
  console.log(`Question: ${question[0]} ${question[1]}`);
  return question;
};

export default () => {
  let i = 0;
  let succesCount = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  giveGameObjective();
  do {
    question = askQuestion();
    answer = getAnswer();
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
