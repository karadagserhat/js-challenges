function capitalizeWords(str) {
  return str
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
}

console.log(capitalizeWords('I got up early today'));
console.log(capitalizeWords('I walked straight to the beach'));
