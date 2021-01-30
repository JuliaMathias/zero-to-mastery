// let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
}

//Destructuring

const obj = {
	player = "bobby";
	experience = 100;
	wizardLevel = false;
}

const player = obj.player
const experience = obj.experience
const wizardLevel = obj.wizardLevel

const {player, experience} = obj
let { wizardLevel} = obj

const name = 'john snow';
const obje = {
	[name]: 'hello';
	['ray' = 'smith']: 'hihi'
}

const a = "Simon";
const b = true;
const c ={};

const objec = {
	a,
	b,
	c
}

//template strings

const name = "Sally";
const age = 34;
const pet = "horse"

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;

//default arguments

function greet(name= '', age=30, pet='cat') {
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;
}

//symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//arrow functions

function add(a,b) {
	return a +b;
}

const dd = (a,b) => a + b;