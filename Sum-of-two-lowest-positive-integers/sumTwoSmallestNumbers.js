const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y);
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
