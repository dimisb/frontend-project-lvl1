export const isEven = (number) => number % 2 === 0;

export const getRandomInt = (min, max) => {
  const result = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  return result;
};

export const calculate = (params) => {
  const [a, sign, b] = params;
  let result = 0;
  switch (sign) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      result = a * b;
      break;
  }
  return result;
};

// Greatest common divisor
export const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

// Arithmetical progression
export const ap = (a1, d, n) => {
  const progression = [];
  for (let i = 1; i <= n; i += 1) {
    const a = a1 + d * (i - 1);
    progression.push(a);
  }
  return progression;
};

export const isPrime = (a) => {
  if (a < 2) return false;
  for (let divisor = 2; divisor <= a / 2; divisor += 1) {
    if (a % divisor === 0) return false;
  }
  return true;
};

export const getRandomSign = () => {
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
