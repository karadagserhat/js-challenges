function checkPalindrome(str) {
  let tempStr = str.match(/\w/gi).join('').toLowerCase();

  return tempStr === tempStr.split('').reverse().join('');
}

console.log(checkPalindrome('Was it a car or a cat I saw'));
console.log(checkPalindrome('Red -rum-, sir, -is-murder'));
