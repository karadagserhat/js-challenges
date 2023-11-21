function countLetters(str) {
  let letters = [];
  let count = 1;

  let tempArr = str.split('');

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      let value = `${count}${tempArr[i]}`;
      // letters = [...letters, value];
      letters.push(value);
      console.log(letters);
      count = 1;
    }
  }

  return letters.join('');
}

/***************** */
function countLetters2(str) {
  str += '#';
  let letts = str[0];
  let count = 0;
  let result = '';
  for (let char of str) {
    if (letts === char) {
      count++;
    } else {
      result += `${count}${letts}`;
      letts = char;
      count = 1;
    }
  }
  return result;
}

/*************** */
function countLetters3(str) {
  let obj = {};
  str.split('').forEach((l) => (obj[l] ? obj[l]++ : (obj[l] = 1)));
  return Object.entries(obj).reduce(
    (total, entry) => total + entry[1] + entry[0],
    ''
  );
}

console.log(countLetters3('ffffeerttttooo'));
// 4f2e1r4t30
