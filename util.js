var util  = require('util');
function Base() {
    this.name = 'base';
    this.base =1994;
    this.sayHello =function () {
        console.log('hello' + this.name);
    }
}

Base.prototype.showName = function () {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
//Sub继承Base
//Sub仅仅继承了Base在原型中定义的函数，而构造函数内部创造的base属性和sayHello函数都没有被Sub继承。
// 同时，在原型中定义的属性不会被console.log作为对象的属性输出。

util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);


