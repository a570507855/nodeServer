const mysql = require('../../../mysql/mysql').getInstance;

module.exports.selectList = function () {
    return mysql.query('select * from user');
};

module.exports.selectById = function (id) {
    return mysql.query('select * from user where id = ' + id);
};







