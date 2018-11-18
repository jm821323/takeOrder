### 一、如何使用


git clone

```
git clone https://github.com/jm821323/takeOrder.git
```

1.1.安装

```
npm install
```

1.2.需要在config文件下db.js配置本地数据库
```
const sequelize = new Sequelize('数据库', '数据库用户名', '数据库密码', {})

别忘了创建数据库，黑窗口登录msyql：create database '数据库用户名'
```


1.3.开启服务

```
npm start
```

#### 二、路由说明

```js
// └──routes/index.js文件

const router = new Router({
    prefix: '/api/v1'
})


```

#### 三、接口说明（用户接口）

##### 创建用户接口

```
/user
```
3.1.请求方式

```
post
```
3.2.请求参数


参数 | 说明 | 需求
---|--- |---
username | 用户名 | 必填
password | 密码 | 必填

3.3.返回数据

```
{
    "code": 200,
    "msg": "创建用户成功",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJvYiIsImlkIjozLCJpYXQiOjE1Mjg3NzUzOTMsImV4cCI6MTUyODc3ODk5M30.cnWcgJQF1z7adgKp49AgP4UvpqIXUNjGfjWLMq-rMeA"
}
```

##### 登录接口

```
/user/login
```
3.4.请求方式

```
post
```
3.5.请求参数


参数 | 说明 | 需求
---|--- |---
username | 用户名 | 必填
password | 密码 | 必填

3.6.返回数据

```
{
    "code": 200,
    "msg": "登录成功",
    "data": {
        "id": 3,
        "username": "Bob",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJvYiIsImlkIjozLCJpYXQiOjE1Mjg3NzU0NTIsImV4cCI6MTUyODc3OTA1Mn0.v_B_EXvzYTk7Wz-jl4D8F5n5kn2iah8oht0s6S72Zsc"
    }
}
```

##### 获取用户信息

```
/user
```
3.7.请求方式

```
get
```
3.8.说明

token 一定要传

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuaigeWHpOazomJvIiwiaWQiOjUsImlhdCI6MTUyNzczNjc2NSwiZXhwIjoxNTI3NzQwMzY1fQ.y5w4lEFRf8bpR4fFPNDms1m9WSX9mfQ3fo5dejG7y3A
```





3.9.返回数据

```
{
    "code": 200,
    "msg": "查询成功",
    "data": {
        "id": 3,
        "username": "Bob"
    }
}
```

##### 删除用户接口

```
/user/:id
```
3.10.请求方式

```
delete
```
3.11.请求参数


参数 | 说明 | 需求
---|--- |---
id | 用户ID | 必填

3.12.返回数据

```
{
    "code": 200,
    "msg": "删除用户成功"
}
```



#### 四、项目主要文件

4.1.1schema文件
```
创建数据库表
```

4.2.1modules文件

```
model层 - 主要处理参数
```

4.3.1controllers文件

```
控制器 - 处理数据库增删改查
```

4.4.1router 文件

```
路由
```

4.5.1app.js

```
入口文件
```

项目身份验证使用了jwt，就是说登录注册和获取用户信息不用jwt验证，其他接口都需要token验证

比如注册用户接口：在postman软件操作接口，例注册接口：

```
post 请求

http://localhost:3000/api/v1/createUser?username=梁凤波bo&password=bobo12345
```

创建成功后返回信息：

```js
{
    "code": 200,
    "message": "创建成功",
    "bean": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuaigeWHpOazomJvIiwiaWQiOjUsImlhdCI6MTUyNzczNjUzMSwiZXhwIjoxNTI3NzQwMTMxfQ.GAQg-hZm3rDYq70-16sgfNHvD64gmrWSFzQCZQs7bl4"
    }
}
```

注册

```js
post 请求

http://localhost:3000/api/v1/user/login?username=贾明&password=ming12345
```
成功返回信息：

```js
{
    "message": "登录成功！",
    "data": {
        "id": 5,
        "username": "jiaming",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuaigeWHpOazomJvIiwiaWQiOjUsImlhdCI6MTUyNzczNjc2NSwiZXhwIjoxNTI3NzQwMzY1fQ.y5w4lEFRf8bpR4fFPNDms1m9WSX9mfQ3fo5dejG7y3A"
    },
    "code": 200
}
```


处理jwt验证时候，我添加了方法

```
app.use(jwt({secret: secret.sign}).unless({path: [/^\/api\/v1\/login/, /^\/api\/v1\/createUser/]}))

```

登录注册都会返回token信息，除了这两个接口必须要发送header头

在header中加入token

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuaigeWHpOazomJvIiwiaWQiOjUsImlhdCI6MTUyNzczNjc2NSwiZXhwIjoxNTI3NzQwMzY1fQ.y5w4lEFRf8bpR4fFPNDms1m9WSX9mfQ3fo5dejG7y3A
```

