let obj = {
    get:function(){
        console.log('从服务器获取的数据');
    },
    post:function(){
        console.log('提交数据');
    }
}

// 这种写法需要xxx.obj调用
// exports.xxx = obj   

// 这种写法可以直接obj调用
module.exports = obj