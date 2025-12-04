"use strict";
//用户基本信息包含：姓名、年龄、性别、职业、电话、地址、所购产品名称、所购产品价格、所购产品数量
//需要实现的功能：将用户信息打印输出（使用函数调用的方式）
var PrintPersonInfo = function (name, age, gender, occupation, phone, address, product, price, count, vip, photouri) {
    console.log("客户信息");
    console.log("姓名：" + name);
    console.log("年龄：" + age);
    console.log("性别：" + gender);
    console.log("职业：" + occupation);
    console.log("电话：" + phone);
    console.log("地址：" + address);
    console.log("所购产品名称：" + product);
    console.log("所购产品价格：" + price);
    console.log("所购产品数量：" + count);
    console.log("是否是VIP用户：" + vip);
    console.log("用户头像链接：" + photouri);
};
PrintPersonInfo('张三', 18, '男', '律师', 19182007405, '翻斗花园1号楼1001', 'Luba-1', 2999, 2, false, '1.png');
PrintPersonInfo('李四', 23, '男', '自由职业', 19182007406, '翻斗花园1号楼1007', 'Yuka', 1999, 1, true, '2.png');
PrintPersonInfo('王五', 41, '男', '工程师', 19182007407, '翻斗花园1号楼1003', 'Luba-2', 3999, 1, true, '3.png');
