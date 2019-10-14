# 前端安全
- 表单（form）
form -> onsubmit -> url
POST data:
{   email:'',
    password:''
}'
后端 登录过程 sql 查找的过程
sql 语法报错，服务器出差

用户的输入，不可信任
password' sql 的提前结束或多了一个' 500 编码解码


直接盗取账户

select * from users 
    WHERE eamil = 
        'use@email.com' AND password = 'password%27'