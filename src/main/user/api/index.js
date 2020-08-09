const Express = require('express');
const userAPI = Express.Router();
const userSQL = require('../sql/crud');

/**
 * path:'/getUserInfo'
 * 获取全部用户信息
 */
userAPI.get('/getUserInfo',((req, res) => {
    userSQL
        .selectList()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
}));

/**
 * path:'/getUserInfoById'
 * 根据id查询数据
 */
userAPI.get('/getUserInfoById',((req, res) => {
    userSQL
        .selectById(1)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
}));

module.exports = userAPI;