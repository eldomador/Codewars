const longest = (s1, s2) =>
  Array.from(new Set((s1 + s2).split("")))
    .sort()
    .join("");

console.log(longest("aretheyhere", "yestheyarehere"));
