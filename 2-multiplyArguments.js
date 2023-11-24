function multiply(...args) {
  return args.reduce((total, item) => {
    return item ? item * total : item + total;
  }, 1);
}

console.log(multiply(4, 5));
console.log(multiply(1, 2, 3, 5));
console.log(multiply(2, 0, 4, 2));
