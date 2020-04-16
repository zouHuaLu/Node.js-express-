//util作为 node.js 的一个核心模块，能够一共常用函数的集合，弥补核心JavaScript的功能过于精简的不足

//util.inherits(constructor,superConstructor)是一个实现对象间原型继承的函数

var util = require('util');

function Base(){
    this.name = 'base'
    this.base = 1991;
    this.sayHello = function(){
        console.log('Hello'+this.name)
    }
}

Base.prototype.showName = function(){
    console.log(this.name)
}

function Sub(){
    this.name = "sub"
    // this.age = 18

}

util.inherits(Sub,Base)
var objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)
var objSub = new Sub()
objSub.showName()
objSub.sayHello()
console.log(objSub)