const array = [1, 2, 10, 16];

const double = []

const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log("forEach", double);


//map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log("mapArray", mapArray);
