const sum = (a:number, b:number) => a + b;

const divide = (a:number, b:number) => {
  if (!b || Number.isNaN(b)) {
    throw new Error('Can not divide with zero');
  }
  return a / b;
};
const fizzBuzz = (number: number) => {
  console.log('Hello');
};

export default { sum, divide, fizzBuzz };
