const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => {
  const result = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  return result;
};
export { isEven, getRandomInt };
