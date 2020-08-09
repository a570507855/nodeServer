const Express = require('express');
const router = Express.Router();
const fs = require('fs');

router.get('/',(req, res) => {
    console.log('来人了');
    res.sendFile('D:\\idea_project\\node_website\\test.html');
    /*fs.readFile('./test.html',(err, data) => {
        if(!err){
            console.log(data.toString());

            //res.end(data);

            //res.send(data.toString());
        }
        else {
            console.log(err);
        }
    });*/


});


module.exports = router;