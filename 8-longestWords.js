function longestWords(str) {
  let words = str.split(' ');
  let size = 0;
  let max = [''];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= size) {
      size = words[i].length;
      if (max.at(-1).length < words[i].length) {
        max = [];
        max.push(words[i]);
      } else {
        max = [...max, words[i]];
      }
    }
  }

  console.log(max);
  console.log([...max]);

  console.log(size);
  return [...max];
  return max;
}

console.log(longestWords('I woke up early today'));
console.log(longestWords('I went straight to the beach'));
