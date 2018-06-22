// ========================= task-1 =========================

/* const Universe = (function Universe() {
  let instance;

  function Singleton() {
    if (instance) {
      return instance;
    }

    this.size = 100;
    instance = this;
  }

  Singleton.prototype.getSize = function getSize() {
    return this.size;
  };

  Singleton.prototype.setSize = function setSize(size) {
    this.size = size;
  };

  return Singleton;
}());

const a = new Universe();
const b = new Universe();

console.log(a === b); // должны получить true
console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200 */

// ========================= task-2 =========================

/* function Person(name) {
  this.name = name;
}

Person.prototype.getName = function getName() {
  return this.name;
};

function Man(name, facialHair) {
  Person.call(this, name);
  this.facialHair = facialHair;
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;

Man.prototype.getName = function getName() {
  return `Name: ${Person.prototype.getName.call(this)}`;
};

Man.prototype.getFacialHair = function getFacialHair() {
  return this.facialHair;
};

const person = new Person('somebody');
console.log(person.getName()); // somebody

const man = new Man('Viktor', true);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true */

// ========================= task-3 =========================

/* function Person(name) {
  const that = {};
  that.name = name;

  that.getName = function getName() {
    return that.name;
  };

  return that;
}

function Man(name, facialHair) {
  const that = Person(name);
  that.facialHair = facialHair;
  const getNamePerson = that.getName;

  that.getName = function getName() {
    return `Name: ${getNamePerson(that.name)}`;
  };

  that.getFacialHair = function getFacialHair() {
    return that.facialHair;
  };

  return that;
}

const person = Person('somebody');
console.log(person.getName()); // somebody

const man = Man('Viktor', true);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair());// true */

// ========================= task-4 =========================

// ========================= task-6 =========================

/*
Object.prototype.myApply = function myApply(obj, arr) {
  return this.call(obj, ...arr);
};

Object.prototype.myCall = function myCall(obj, ...arr) {
  return this.apply(obj, arr);
};

Object.prototype.myBindByCall = function myBindByCall(obj, ...arr) {
  return () => this.call(obj, ...arr);
};

const obj1 = {
  a: 20,
  foo: function foo(...numbers) {
    return this.a + numbers.reduce((prev, curr) => prev + curr);
  },
};

const obj2 = {
  a: 30,
};

console.log(obj1.foo.myApply(obj2, [5, 5])); // 40
console.log(obj1.foo.myApply(obj2, [5, 5, 10])); // 50
console.log(obj1.foo.myCall(obj2, 5, 5, 20)); // 60
console.log(obj1.foo.myCall(obj2, 5, 5, 10, 20)); // 70

const f1 = obj1.foo.myBindByCall(obj2, 5, 5);
console.log(f1()); // 40
const f2 = obj1.foo.myBindByCall(obj2, 5, 5, 10);
console.log(f2()); // 50
*/

// =========================

/*
function objectCreate(proto, someObj) {
  function F() {}
  F.prototype = proto;
  const f = new F();
  return Object.defineProperties(f, someObj);
}

const obj = {
  a: 1,
};

const obj2 = objectCreate(obj, {
  p: {
    value: 20,
  },
  k: {
    value: 30,
  },
});

console.log(obj2);
//  { p: 20, k: 30, __proto__: { a: 1 } }
*/

// =========================

function myNew(func) {
  const that = {};
  if (func.prototype !== null) {
    that.__proto__ = func.prototype;
  }
  const ret = func.apply(that, Array.prototype.slice.call(arguments));
  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
    return ret;
  }
  return that;
}

function F() {
  this.a = 10;
}

F.prototype.foo = function () {
  return this.a;
};

const a = myNew(F);
console.log(a); // { a: 10, __proto__: { foo, constructor } }
console.log(a.foo()); // 10
