function arraySum(arr) {
  let tempArr = arr.sort((a, b) => a - b);

  // let largest = tempArr.pop();

  const total = tempArr.reduce((total, item) => total + item, 0);
  console.log(total);

  return total - tempArr.at(-1) === tempArr.at(-1);

  // return total === largest;
  return arr;
}

console.log(arraySum([1, 2, 4, 6, 13]));
// true 1+2+4+6=13
console.log(arraySum([1, 2, 4, 34, 22]));
// false 1+2+4+22= 29   29 != 34
