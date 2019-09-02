// //es5中的类和静态方法
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     this.run = function () {
//         console.log(`${this.name}——${this.age}`);
//     }
// }
//
// //原型链上面的属性和方法可以被多个实例共享
// Person.prototype.sex = '男';
// Person.prototype.sayHello = function () {
//     console.log( `${this.name} --${this.sex}`)
// };
//
// //静态方法
// Person.address = function () {
//     console.log( `地址`);
//
// }
//
// var p = new Person('joe',21); /*实例方法是通过实例化来调用的，静态是通过类名直接调用*/
// p.sayHello();
// p.run();
// console.log(p.sex);
//
// Person.address(); /*执行静态方法*/





/*
原型链继承和对象冒充继承

 对象冒充继承:没法继承原型链上面的属性和方法

 原型链继承：可以继承构造函数里面以及原型链上面的属性和方法，实例化子类的时候没法给父类传参
* */

function Person(name,age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(`${this.name}——${this.age}`);
    }
}
//原型链继承
Person.prototype.work = function () {
    console.log('work');
}


function web(name,age) {
    Person.call(this,name,age);   /*对象冒充实现继承*/
}

web.prototype=new Person();
var w = new web('joe',20);
console.log(w.name);
w.run();
w.work();  //未加web.prototype=new Person();时，w.work is not a function

// var p = new Person('wen',21);
// p.work();




