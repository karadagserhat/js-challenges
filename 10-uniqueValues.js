function unique(str) {
  let values = {};

  for (let letter of str) {
    if (values[letter]) return false;
    values[letter] = 'exists';
  }

  return true;
}

console.log(unique('abcde')); // true
console.log(unique('abcda')); // false
