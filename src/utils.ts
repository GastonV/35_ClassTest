const sum = (a:number, b:number) => a + b;

const divide = (a:number, b:number) => {
  if (!b || Number.isNaN(b)) {
    throw new Error('Can not divide with zero');
  }
  return a / b;
};
const fizzBuzz = (number: number) => {
  if (!number || Number.isNaN(number)) {
    throw new Error('Can not be NaN');
  }
  for (let i = 1; i <= number; i += 1) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
};

const armStrong = (n: number) => {
  const temp = n.toString().split('');
  const power = temp.length;
  let result = 0;
  for (let i = 0; i < temp.length; i += 1) {
    const num = temp[i];
    result += (+num) ** power;
  }
  return result === n;
};
export default {
  sum, divide, fizzBuzz, armStrong,
};
