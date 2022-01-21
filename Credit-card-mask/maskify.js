// const maskify = (cc) => {
//   if (cc == null || cc.length <= 4) {
//     return cc.substring(cc.length - 4, cc.length);
//   } else {
//     return "#".repeat(cc.length - 4) + cc.substring(cc.length - 4, cc.length);
//   }
// };

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

console.log(maskify("11111"));
