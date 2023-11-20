function countLetters(str) {
  let words = str.split(' ');
  let mostDupes = 0;
  let longWords = [];

  for (let word of words) {
    let currentDupes = word.length - new Set(word.toLowerCase()).size;
    console.log(currentDupes);

    if (currentDupes > mostDupes) {
      mostDupes = currentDupes;
      console.log(mostDupes);
      console.log(word);
      longWords.push(word);
    }
  }
  return longWords.at(-1);
}

console.log(countLetters('Javascript is the greatest programming language'));
