const getAverage = (marks) =>
  Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);

console.log(getAverage([1, 2, 3, 4]));
