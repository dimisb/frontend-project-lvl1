import readlineSync from 'readline-sync';
import { isEven, getRandomInt } from '../math.js';
import { gameRounds, maxRandom } from '../index.js';

let question = 0;
let answer = '';

const giveGameObjective = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const correctAnswer = (q) => {
  if (isEven(q)) return 'yes';
  return 'no';
};

const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
  return answer;
};

const askQuestion = () => {
  question = getRandomInt(1, maxRandom);
  console.log(`Question: ${question}`);
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
    if (answer === correctAnswer(question)) { // tweak: answer is str, not a num
      succesCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)}'. \nLet's try again, ${name}!`);
    }
    i += 1;
  } while (answer === correctAnswer(question) && i < gameRounds); // tweak: answer is str, not a num
  if (succesCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
