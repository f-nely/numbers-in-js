const bigNumber = BigInt(Number.MAX_SAFE_INTEGER);

console.log(bigNumber + 1n);
console.log(bigNumber + 2n);
console.log(bigNumber + 1n == bigNumber + 2n);
