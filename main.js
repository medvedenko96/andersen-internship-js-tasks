const Universe = (function Universe() {
  let instance;
  let size = 100;
  function Singleton() {
    if (instance) return instance;
    instance = this;
  }
  Singleton.prototype.getSize = function getSize() {
    return size;
  };
  Singleton.prototype.setSize = function setSize(newSize) {
    size = newSize;
  };
  return Singleton;
}());


const a = new Universe();
const b = new Universe();

console.log(a === b); // должны получить true

console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200
