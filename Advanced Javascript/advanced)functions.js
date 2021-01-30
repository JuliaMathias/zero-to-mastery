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
  function second = () => {
    alert(greet);
  }
  return second;
}
const newFunc = first();
newFunc();



