// module.exports = function zeros(expression) {
function zeros(expression) {
  const countFactorialZeros = (number, multiplier) => {
    let current = number;
    let counter = 0;
    while (current >= multiplier) {
      counter += (current / multiplier) ^ 0;
      current /= multiplier;
    }
    return counter;
  };

  const countEvenZeros = () => {};
  
  const countOddZeros = (number, multiplier) => {
    let current = number;
    let counter = 0;
    while (current >= multiplier) {
      counter += current % 2 === 0 ? 0 : (current / multiplier) ^ 0;
      current /= multiplier;
    }
    return counter;
  };

  console.log('expression:', expression);
  

  const multipliers = expression.split('*');

  const [factZeros, evenZeros, oddZeros] = multipliers
    .reduce((acc, multiplier) => {
      const [factZeros, evenZeros, oddZeros] = acc;
      console.log(`[--> factZeros, evenZeros, oddZeros]: [${factZeros}, ${evenZeros}, ${oddZeros}]`);

      const splittedMultiplier = multiplier.split('!');
      
      const argument = splittedMultiplier[0];
      console.log('argument:', argument);
      
      const operation = splittedMultiplier.slice(1).map(() => '!').join('');
      console.log('operation:', operation);

      if (operation === '!') {
        return [factZeros + countFactorialZeros(argument, 5), evenZeros, oddZeros];
      } else if (operation === '!!' && argument % 2 === 0) {
        return [factZeros, evenZeros + countEvenZeros(argument, 2), oddZeros + countEvenZeros(argument, 5)];
      } else {
        return [factZeros, evenZeros, oddZeros + countOddZeros(argument, 5)];
      }
    }, [0, 0, 0,]);

  console.log(`------> [factZeros, evenZeros, oddZeros]: [${factZeros}, ${evenZeros}, ${oddZeros}]`);

  // return factZeros + Math.min(evenZeros, oddZeros);
}


const yy = zeros('11!!');
// console.log(yy);
