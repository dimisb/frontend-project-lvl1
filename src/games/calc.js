import readlineSync from 'readline-sync';
import { calculate, getRandomInt, getRandomSign } from '../math.js';
import { gameRounds, maxRandom } from '../index.js';

let question = [];
let answer = 0;

const giveGameObjective = () => {
  console.log('What is the result of the expression?');
};

const correctAnswer = (q) => calculate(q);

const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
  return answer;
};

const askQuestion = () => {
  question = [getRandomInt(1, maxRandom), getRandomSign(), getRandomInt(1, maxRandom)];
  console.log(`Question: ${question[0]} ${question[1]} ${question[2]}`);
  return question;
};

// game engine:
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
