// module.exports = function zeros(expression) {
function zeros(expression) {
  const countMultiplier = (number, multiplier) => {
    let current = number;
    let counter = 0;
    while (current >= multiplier) {
      counter += (current / multiplier) ^ 0;
      current /= multiplier;
    }
    return counter;
  };

  console.log('expression:', expression);

  const multipliers = expression.split('*');

  const [factZeros, evenZeros, oddZeros, tens, hundred] = multipliers
    .reduce((acc, multiplier) => {
      const [factZeros, evenZeros, oddZeros, tens, hundred] = acc;
      console.log(`[--> factZeros, evenZeros, oddZeros, tens, hundred]: [${factZeros}, ${evenZeros}, ${oddZeros}, ${tens}, ${hundred}]`);

      const splittedMultiplier = multiplier.split('!');
      
      const argument = splittedMultiplier[0];
      console.log('argument:', argument);
      
      const operation = splittedMultiplier.slice(1).map(() => '!').join('');
      console.log('operation:', operation);

      if (operation === '!') {
        return [
          factZeros + countMultiplier(argument, 5),
          evenZeros,
          oddZeros,
          tens,
          hundred
        ];
      } else if (operation === '!!' && argument % 2 === 0) {
        return [
          factZeros,
          evenZeros + countMultiplier(argument, 2),
          oddZeros + countMultiplier(argument, 50),
          tens + countMultiplier(argument, 10),
          hundred + countMultiplier(argument, 100)
        ];
      } else {
        return [
          factZeros,
          evenZeros,
          oddZeros + countMultiplier(argument, 5) - countMultiplier(argument, 10),
          tens,
          hundred
        ];
      }
    }, [0, 0, 0, 0, 0]);

  console.log(`------> [factZeros, evenZeros, oddZeros, tens, hundred]: [${factZeros}, ${evenZeros}, ${oddZeros}, ${tens}, ${hundred}]`);

  return factZeros + Math.min(evenZeros, oddZeros) + tens;
}


// const yy = zeros('100!*100!!');
const yy = zeros('100!*100!!');
console.log(yy);
