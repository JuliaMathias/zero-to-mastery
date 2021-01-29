//old way

functionfirst() {
	var greet = 'Hi';
	function second() {
		alert(greet);
	}
	return second;
}

var newFunc = first();
newFunc();

//new way

const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//closures - a function ran. the function executed. it's never gonna execute
//again, BUT it's goin to remember that there are references to those
//variables so the child sope always has acess to the parent scope

//Currying

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);