const mysql = require('../../../mysql/mysql').getInstance;

/*****************登录功能相关**************/

//登录验证
module.exports.validateLogon = function (loginInfo) {
    return mysql.query(`select id  from user where account = '${loginInfo.account}' and password = '${loginInfo.password}'`);
};

//注册
module.exports.register = function (info) {
    return mysql.query(`insert into user (account, password) values ("${info.account}" , "${info.password}" )` );
};

//注册验证
module.exports.isRegister = function (account) {
    return mysql.query(`select count(*) as isExist from user where account = '${account}'`);
};

