//=================================================
//1. Singleton (практика Замыканий)
//Universe - функция-конструктор.
//    У объекта, созданного этой функцией должно быть:
//    - свойство size = 100.
//    - метод getSize - возвращает свойство size.
//    - метод setSize(size) - установка свойства size.
//=================================================
/*function Universe() {
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

}*/

/*function Universe() {
    let instance;

    Universe = function () {
        return instance;
    };

    Universe.prototype = this;
    instance = new Universe();
    instance.constructor = Universe;

    instance.size = 100;
    this.getSize = function () {
        return instance.size
    };
    instance.setSize = function (size) {
        instance.size = size;
    };

    return instance;
}*/



/*function Universe() {
    let instance;
    Universe = function Universe() {
        if (instance) return instance;
    };

    instance = this;

    instance.size = 100;
    instance.getSize = function () {
        return instance.size
    };
    instance.setSize = function (size) {
        instance.size = size;
    };

    return instance;
}*/

let Universe = (function() {
    let instance;
    
    function singleton() {
        if (instance) {
            return instance
        } else {
            instance = this
        }
        
    }

    singleton.size = 100;

    singleton.prototype.getSize = function () {
        return singleton.size
    };

    singleton.prototype.setSize = function (size) {
        singleton.size = size;
    };

    return singleton

})();


let a = new Universe();
let b = new Universe();

console.log(a === b); // должны получить true

console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200
