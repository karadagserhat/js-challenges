function testRepeat(arr) {
  let nums = [...new Set(arr)];
  console.log(nums);
  let numCount = nums.reduce((acc, num) => {
    acc.push({ num, count: arr.filter((x) => x === num).length });

    console.log(acc);

    return acc;
  }, []);

  console.log(numCount);

  let sortedNumCount = numCount.sort((a, b) => b.count - a.count);

  if (sortedNumCount.every((item) => item.count === 1)) return -1;

  return sortedNumCount[0].num;
}

console.log(testRepeat([5, 2, 2, 1, 5])); //5
console.log(testRepeat([6, 5, 5, 10, 10, 10])); //10
console.log(testRepeat([3, 4, 1, 6, 10])); //-1
