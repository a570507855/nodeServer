const Express = require('express');
const mysql = require('../mysql/mysql').getInstance;

const router = require('./router');
const userAPI = require('../main/user/api');
const loginAPI = require('../main/user/api/login');

const App = Express();
App.listen(9999,() => {
    console.log(`服务器启动成功`);
});
App.use(userAPI);
App.use(router);
App.use(loginAPI);
