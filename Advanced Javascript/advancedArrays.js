const array = [1, 2, 10, 16];

const double = []

const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log("forEach", double);


// map

const mapArray = array.map(num => num * 2);

console.log("mapArray", mapArray);

// filter

const filterArray = array.filter(num => num > 5);

console.log("filterArray", filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num
}, 5);

console.log("reduceArray", reduceArray);
