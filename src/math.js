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
