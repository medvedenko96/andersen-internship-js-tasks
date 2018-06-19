function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

function Man(name, facialHair) {
  Person.call(this, name);
  this.facialHair = facialHair;
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;

Man.prototype.getName = function () {
  return `Name: ${Person.prototype.getName.call(this, this.name)}`;
};

Man.prototype.getFacialHair = function () {
  return this.facialHair;
};

const person = new Person('somebody');
console.log(person.getName()); // somebody

const man = new Man('Viktor', true);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true