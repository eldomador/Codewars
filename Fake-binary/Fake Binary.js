const fakeBin = (x) => {
  return x
    .split("")
    .map(function (element) {
      if (element < 5) {
        return 0;
      } else return 1;
    })
    .join("");
};
