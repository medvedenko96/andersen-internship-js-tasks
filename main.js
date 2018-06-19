const Universe = (function Universe() {
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
console.log(a.getSize(), b.getSize()); // 200, 200
