// reference type
var object1 = {}
// context

// instantiation
class Player {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  introduce () {
    console.log(`Hi I am ${this.name}. I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type){
    super(name, type)
  }
  play(){
    console.log(`WEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
