const DNAStrand = (dna) => {
  return dna
    .split("")
    .map(function (element) {
      return { A: "T", T: "A", C: "G", G: "C" }[element];
    })
    .join("");
};
