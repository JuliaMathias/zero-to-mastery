// value

var a = 5;
var b = a;

b++;

// reference

var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(56454545)
console.log(d)

let obj = { a: 'a', b: 'b', c: 'c' };
let clone = Object.assign({}, obj);
