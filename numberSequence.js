const first = [8, 6, 8, 6, 7, 4, 7];
const second = [4, 5, 5, 7, 5, 5, 9];
const third = [3, 3, 2, 8, 7, 6, 5];

function count(data) {
  return data.reduce((total, item, i, arr) => {
    if (item === arr[i + 2] && item !== arr[i + 1]) total++;
    return total;
  }, 0);
}

const count2 = (data) =>
  data.reduce(
    (total, item, i, arr) =>
      total + (item === arr[i + 2] && item !== arr[i + 1]),
    0
  );

console.log(1 + true); //2
console.log(1 + false); //1

console.log(count(first));
console.log(count2(first));
console.log(count(second));
console.log(count2(second));
console.log(count(third));
console.log(count2(third));
