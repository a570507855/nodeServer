const mysql = require('mysql');



module.exports = class MySQL {
    constructor(){
        this.mysql = mysql;
        this.host = 'localhost';
        this.user = 'root';
        this.password = 'disueb11';
        this.database = 'node_website';
        this.isConnected = false;
        this.connectMySQL().then((connection) => {
            this.connection = connection;
        });
        this.count = 1;
    }
    //单例模式
    static get getInstance(){
        if (this.instance){
            return this.instance;
        }
        return this.instance = new this();
    }
    add(){
        return this.count++;
    }

    //返回连接对象
    connectMySQL(){
        return new Promise((resolve, reject) => {
            const connection = mysql.createConnection({
                host: this.host,
                user: this.user,
                password: this.password,
                database: this.database
            });
            connection.connect((error) => {
                if(error){
                    reject(error);
                }
                else{
                    this.isConnected = true;
                    resolve(connection);
                    console.log(`MySQL连接成功`);
                }
            });
        })
    }
    query(sql){
        return new Promise((resolve, reject) => {
            this.connection.query(sql,(error,result) =>{
                if(error){
                    reject(error)
                }
                else {
                    resolve(result);
                }
            })
        });
    }
};

