// old way

// function first() {
//   var greet = "Hi";
//   function second() {
//     alert(greet);
//   }
//   return second;
// }
// var newFunc = first();
// newFunc();

// new way

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  }
  return second;
}
const newFunc = first();
newFunc();

// Currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b
const multiplyBy5 = curriedMultiply(5);
curriedMultiply(3)
multiplyBy5(4)




