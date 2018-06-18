//=================================================
//1. Singleton (практика Замыканий)
//Universe - функция-конструктор.
//    У объекта, созданного этой функцией должно быть:
//    - свойство size = 100.
//    - метод getSize - возвращает свойство size.
//    - метод setSize(size) - установка свойства size.
//=================================================
function Universe() {
    if (typeof Universe.instance === 'object') {
        return Universe.instance;
    }
    this.size = 100;
    this.getSize = function () {
        return this.size
    };
    this.setSize = function (size) {
       this.size = size;
    };
    Universe.instance = this;
    return this

}


let a = new Universe();
let b = new Universe();

console.log(a === b); // должны получить true

console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200
