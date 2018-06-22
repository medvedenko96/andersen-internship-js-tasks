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

/*
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(100), ms);
 });
}

delay(1000).then(value => console.log(`Done with  + ${value}`)); // Done with 100

//  ===============================================

const fetch = require('node-fetch');

const url = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const urlUsers = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

function getUserDataPromise() {
  fetch(url, { method: 'GET' })
  .then(res => res.json())
  .then((json) => {
    const { getUsersData } = json;
    if (getUsersData === true) {
      fetch(urlUsers, { method: 'GET' })
      .then(res => res.json())
      .then(jsonUsers => console.log(jsonUsers))
      .catch(e => console.log(e));
    }
  })
  .catch(e => console.log(e));
}

getUserDataPromise();

const getUserDataAsync = async () => {
  try {
    const { getUsersData } = await (await fetch(url, { method: 'GET' })).json();
    if (getUsersData === true) {
      console.log(await (await fetch(urlUsers, { method: 'GET' })).json());
    }
  } catch (e) {
    console.log(e);
  }
};

getUserDataAsync();

//  ===============================================

const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

const reqConsistently = async (arrUrls) => {
  const result = [];
  try {
    for (let i = 0; i < arrUrls.length; i += 1) {
      result.push(await (await fetch(arrUrls[i], { method: 'GET' })).json());
    }
  } catch (e) {
    console.log(e);
  }
  console.log(result);
};

reqConsistently(urls);

const arrPromise = urls.map(someUrl => fetch(someUrl).then(res => res.text()));
Promise.all(arrPromise).then(value => console.log(value));

function Consistently(arrUrls) {
  const results = [];
  let chain = Promise.resolve();

  arrUrls.forEach((someUrl) => {
    chain = chain
    .then(() => fetch(someUrl)
    .then(response => response.json()))
    .then(result => results.push(result));
  });
  chain.then(() => console.log(results));
}

Consistently(urls);

const results = [];

function consistentlyReduce(arr) {
  return arr.reduce((promise, item) => {
    return promise.then(() => {
      return fetch(item)
      .then(res => res.text())
      .then(result => results.push(result));
  }).catch(console.error);
}, Promise.resolve());
}

consistentlyReduce(urls).then(() => console.log(results));

//  ===============================================

function getResolvedPromise(value) {
  return new Promise((resolve) => {
    resolve(value);
  });
}

getResolvedPromise(500)
.then((value) => {
  if (value > 300) {
    throw new Error('Ошибка');
  }
})
.catch(e => console.log(e))
.finally(() => console.log('This is Finally!'));
*/

// ========================= task-5 =========================

/*
Array.prototype.duplicate = function duplicate() {
  return [...this, ...this];
};

console.log([1, 2, 3, 4].duplicate()); // [1, 2, 3, 4, 1, 2, 3, 4]
*/

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

/*
function myNew(func) {
  const that = Object.create(func.prototype);
  func.apply(that);
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
*/
