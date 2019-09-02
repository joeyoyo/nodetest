class Dd{
    static getInstance(){
        if (!Dd.instance){
            Dd.instance = new Dd();
        }
        return Dd.instance;
    }
    constructor(){
        /*实例化的时候就会执行*/
         this.connect();
    }
    connect(){
        console.log('连接数据库');
    }
    find(){
        console.log('查找数据库');
    }
}

// var p1 = new Dd();
// var p2 = new Dd();

var p1 = Dd.getInstance();
var p2 = Dd.getInstance();
p1.find();
p2.find()


