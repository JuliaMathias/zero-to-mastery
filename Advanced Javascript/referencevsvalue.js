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

// shallow clone
let clone = Object.assign({}, obj);
let clone2 = {...obj} // new feature

// deep clone
let superClone = JSON.parse(JSON.stringfy(obj))


obj.c = 5;
console.log(clone)
