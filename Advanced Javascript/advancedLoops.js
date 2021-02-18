const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

// old way

for (let i = 0 ; i < basket.length; i++) {
  console.log(basket[i]);
}


// ES5 way

basket.forEach(item => {
  console.log(item);
})

// for of
// iterating - arrays, strings

for (item of basket) {
  console.log(item);
}

// for in - objects
// enumerating

for (item in detailedBasket) {
  console.log(item);
}
