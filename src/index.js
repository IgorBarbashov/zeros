module.exports = function zeros(expression) {
  const countMultiplier = (number, multiplier) => {
    let current = number;
    let counter = 0;
    while (current >= multiplier) {
      counter += (current / multiplier) ^ 0;
      current /= multiplier;
    }
    return counter;
  };

  const countExtra = (num, mode) => {
    const howManyFives = num => {
      let current = num;
      let count = 0;
      while (current % 5 === 0) {
        count += 1;
        current /= 5;
      }
      return count;
    };
    let current = mode === "even" ? 10 : 5;
    let count = 0;
    while (current <= num) {
      count += howManyFives(current);
      current += 10;
    }
    return count;
  };

  const [twos, fives] = expression.split("*").reduce(
    (acc, multiplier) => {
      const [twos, fives] = acc;
      const splittedMultiplier = multiplier.split("!");
      const argument = splittedMultiplier[0];
      const operation = splittedMultiplier
        .slice(1)
        .map(() => "!")
        .join("");

      if (operation === "!") {
        return [
          twos + countMultiplier(argument, 2),
          fives + countMultiplier(argument, 5)
        ];
      } else if (operation === "!!" && argument % 2 === 0) {
        return [
          twos + countMultiplier(argument, 2),
          fives + countExtra(argument, "even")
        ];
      } else {
        return [
          twos,
          fives + countMultiplier(argument, 5) - countExtra(argument, "even")
        ];
      }
    },
    [0, 0]
  );
  return Math.min(twos, fives);
};
