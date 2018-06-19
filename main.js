function Person(name) {
  let that = {};
  that.name = name;
  that.getName = function () {
    return that.name;
  };
  return that;
}

function Man(name, facialHair) {
  let that = Person(name);
  that.facialHair = facialHair;

  that.getName = function () {
    return `Name: ${that.name}`;
  };

  that.getFacialHair= function (){
    return that.facialHair;
  };
  
  return that;
}

const person = Person('somebody');
console.log(person.getName()); // somebody

const man =  Man('Viktor', true);
console.log(man);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true
