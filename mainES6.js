class Person {
  constructor (name) {
    this.name = name;
  }

  getName () {
    return this.name;
  }
}

class Man extends Person {
  constructor (name, facialHair) {
    super(name);
    this.facialHair = facialHair;
  }

  getName () {
    return `Name: ${super.getName()}`;
  }

  getFacialHair () {
    return this.facialHair;
  }
}

const person = new Person('somebody');
console.log(person.getName()); // somebody

const man = new Man('Viktor', true);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true
