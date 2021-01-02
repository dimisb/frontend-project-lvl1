import readlineSync from 'readline-sync';
import { ap, getRandomInt } from '../math.js';
import { gameRounds, maxRandom } from '../index.js';

let correctAnswer = 0;
const getProgression = () => ap(getRandomInt(1, maxRandom), getRandomInt(2, 6), 10);

export default () => {
  let progression = getProgression();
  let i = 0;
  let succesCount = 0;
  let question = '';
  let answer = 0;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  do {
    [correctAnswer] = progression.splice(getRandomInt(0, progression.length), 1, '..');
    question = progression.join(' ');
    console.log(`Question: ${question}`);
    answer = readlineSync.question('Your answer: ');
    if (+answer === correctAnswer) {
      progression = getProgression();
      succesCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
    }
    i += 1;
  } while (+answer === correctAnswer && i < gameRounds);
  if (succesCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
