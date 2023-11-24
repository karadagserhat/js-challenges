function example(a, b) {
  return function (c, d) {
    return function (e, f) {
      return a * c * e + b * d * f;
    };
  };
}

const example2 = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;

console.log(example(1, 2)(3, 4)(5, 6));
console.log(example2(1, 2)(3, 4)(5, 6));
