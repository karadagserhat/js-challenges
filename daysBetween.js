const date1 = new Date('May 27, 2021');
const date2 = new Date('June 5, 2019');

function getDays(date1, date2) {
  console.log(date2 - date1);
  return (date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(getDays(date1, date2));
