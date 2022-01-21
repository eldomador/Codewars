const check = (a, x) => {
  for (let i = 0; i < a.length; i++) {
    if ((state = a[i] === x)) {
      return true;
    }
  }
  return false;
};

console.log(check(["t", "t", "s", "e"], "e"));
