const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
//membuat middleware (memanggil middleware)
app.use((req,res,next)=>{
    //console.log(req.url, req.method);
    req.banana = 'banana';
    next();
});

app.get('/',(req,res)=>{
    console.log(req.banana);
    res.send('MiddleWare');
});

app.listen(3000);