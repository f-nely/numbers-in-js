console.log(typeof NaN);
// console.log(Number.NaN);

function checkIsNaN(n) {
  if (isNaN(n)) {
    return NaN;
  }
  return n;
}

// console.log(checkIsNaN("NotANumber"));
/* console.log(isNaN(NaN));
console.log(isNaN("hey"));
console.log(isNaN(null));
console.log(isNaN("333")); */

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hey"));
console.log(Number.isNaN(null));
console.log(Number.isNaN("333"));
