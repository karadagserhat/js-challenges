function unique(str) {
  return new Set(str).size === str.length;

  let tempStr = new Set();

  for (let letter of str) {
    if (tempStr.has(letter)) return false;

    tempStr.add(letter);
  }

  return true;
}

console.log(unique('abcde')); // true
console.log(unique('abcda')); // false
