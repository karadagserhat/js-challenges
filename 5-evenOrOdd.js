function sum(num) {
  console.log(num);
  const items = [...num.toString()];
  console.log(items);
  const res = items.reduce((total, item) => {
    return total + Number(item);
  }, 0);

  console.log(res);
  return res % 2 === 0 ? 'EVEN' : 'ODD';
}

console.log(sum(112));
