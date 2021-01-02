import readlineSync from 'readline-sync';
import { ap, getRandomInt } from '../math.js';
import { gameRounds, maxRandom } from '../index.js';

const getProgression = () => ap(getRandomInt(1, maxRandom), getRandomInt(2, 6), 10);
let progression = getProgression();

let correctAnswer = 0;
let question = '';
let answer = 0;

const giveGameObjective = () => {
  console.log('What number is missing in the progression?');
};

const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
  return answer;
};

const askQuestion = () => {
  [correctAnswer] = progression.splice(getRandomInt(0, progression.length), 1, '..');
  question = progression.join(' ');
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
    if (+answer === correctAnswer) {
      progression = getProgression(); // engine tweak, generate new progression
      succesCount += 1;
      console.log('Correct!');
    } else {
      // tweak: correctAnswer is a const, not a func
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
    }
    i += 1;
  } while (+answer === correctAnswer && i < gameRounds);
  if (succesCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
