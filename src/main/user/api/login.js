const Express = require('express');
const loginAPI = Express.Router();
const bodyParser = require('body-parser');
const loginSQL = require('../sql/login');
const Json = require('../../../util/json');

loginAPI.use(bodyParser.json());
let urlencodedParser = bodyParser.urlencoded({ extended: false });

//登录
loginAPI.post('/login',urlencodedParser,(req, res) => {
    //允许htt://localhost:8080进行跨域请求资源
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    /*  res.setHeader('Access-Control-Allow-Methods','POST');
        res.setHeader('Access-Control-Allow-Headers','access-control-allow-origin,content-type');*/

    let json = new Json(false,"登录失败");
    loginSQL
        .validateLogon(req.body)
        .then(result => {
            console.log(result)
            if(tokenId !== undefined){
                let tokenId = result[0].id
                json.flag = true;
                json.msg = '允许登录';
                json.tokenId = tokenId
            }
            res.send(json.toString());
        })
        .catch(err => {
            console.log(err);
            res.send(json.toString());
        });
});

//注册
loginAPI.post('/register', urlencodedParser, (req, res) => {
    let json = new Json(false,'接口异常')
    loginSQL
        .register(req.body)
        .then(result => {
            json.flag = true;
            json.msg = '注册成功';
            res.send(json.toString());
        })
        .catch(err => {
            console.log(err);
            res.send(json.toString());
        })
});

//注册验证
loginAPI.post('/isRegister',urlencodedParser,((req, res) => {
    const json = new Json(true, '该账号未注册')
    loginSQL
        .isRegister(req.body.account)
        .then(result => {
            if(result[0].isExist){
                json.flag = false;
                json.msg = '该账号已注册';
            }
            res.send(json.toString());
        })
        .catch(err => {
            console.log(err);
            res.send('接口异常');
        })
}));

module.exports = loginAPI;