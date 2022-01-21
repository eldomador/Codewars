const nbYear = (p0, percent, aug, p) => {
  let i = 0;
  while (p0 <= p) {
    i++;
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
    console.log(p0);
  }
  return i;
};

console.log(nbYear(1000, 2, 50, 1200));

