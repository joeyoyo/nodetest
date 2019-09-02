// //定义类
// class Person{
//     constructor(name,age){
//         this.name = name;   /*类的构造函数，实例化的时候执行，new的时候执行*/
//         this.age = age;
//     }
//     getName(){
//         console.log(this.name);
//     }
//     setName(_name){
//         this.name = _name;
//     }
// }
//
// var p = new Person('joe',20);
// p.getName();
// p.setName('wen');
// p.getName();




// //es6里面的继承
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getInfo(){
//         console.log(`${this.name}--${this.age}`);
//     }
//     run(){
//         console.log('run');
//     }
// }
// class Web extends  Person{  //继承了Person
//     constructor(name,age,sex){
//         super(name,age);   /*实例化子类的时候把子类的数据传给父类*/
//         this.sex = sex;
//     }
//     work(){
//         console.log(`${this.name}--${this.sex}`);
//     }
// }
//
// var p= new Web('joe',21,'男');
// p.work();
// p.run();
// p.getInfo();
// console.log(p.sex);



class Person{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${this.name}`);
    }
    static work(){
        /*静态方法*/
        console.log('这是es6里面的静态方法');
    }
}
Person.instance = "这是静态方法的属性";

var p =new Person('张三');
p.run();
Person.work();  /*es6里面的静态方法*/
console.log(Person.instance);

