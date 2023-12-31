function isPrime(num) {
  if (num < 2) return false;
  // if (num === 2) return true;

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(8));
console.log(isPrime(11));
console.log(isPrime(121));
console.log(isPrime(127));
