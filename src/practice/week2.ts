
//用户基本信息包含：姓名、年龄、性别、职业、电话、地址、所购产品名称、所购产品价格、所购产品数量
//需要实现的功能：将用户信息打印输出（使用函数调用的方式）

interface PersonInterface {
  (
    name: string,
    age: number,
    gender: '男' | '女',
    occupation: string,
    phone: number,
    address: string,
    product: string,
    price: number,
    count: number
  ): void
}

const PrintPersonInfo: PersonInterface = (name, age, gender, occupation, phone, address, product, price, count) => {
  console.log("客户信息")
  console.log("姓名：" + name)
  console.log("年龄：" + age)
  console.log("性别：" + gender)
  console.log("职业：" + occupation)
  console.log("电话：" + age)
  console.log("地址：" + address)
  console.log("所购产品名称：" + product)
  console.log("所购产品价格：" + price)
  console.log("所购产品数量：" + count)
}

PrintPersonInfo('张三', 18, '男', '律师', 19182007405, '翻斗花园1号楼1001', 'Luba', 2999, 2)

