let products = [
  {
    title: 'Iphone 8',
    company: 'apple',
  },
  {
    title: 'Galaxy',
    company: 'samsung',
  },
  {
    title: 'Iphone 7',
    company: 'apple',
  },
  {
    title: 'Iphone Xs',
    company: 'apple',
  },
  {
    title: 'HTC',
    company: 'htc',
  },
];

function getUnique(arr) {
  return [...arr.reduce((acc, curr) => acc.add(curr.company), new Set())];

  return new Set(products.map((item) => item.company));

  let tempArr = arr.map((item) => item.company);
  return [...new Set(tempArr)];
}

console.log(getUnique(products));
