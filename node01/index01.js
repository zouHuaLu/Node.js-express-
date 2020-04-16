"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
    let transporter = nodemailer.createTransport({
    // 创建邮箱发送对象
        host: "smtp.qq.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'huangjie1234huang@qq.com', // generated ethereal user
            pass: 'wmcxvqbyvtjifeae' // generated ethereal password
        }
    })

    // 发送的邮件信息
    let mailObj = {
        from: '"fred Foo" <huangjie1234huang@qq.com>', // sender address
        to: "953323500@qq.com", // list of receivers
        subject: "asda", // Subject line
        text: "来自黄杰的轰炸"// plain text body
    };

    //发送
    setInterval(function(){
        transporter.sendMail(mailObj)
        console.log("发送成功！")
    },2000);



