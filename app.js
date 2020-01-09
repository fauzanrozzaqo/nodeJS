const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static('static'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.listen(3000);
// app.get('/example', (req,res)=>{
//     res.send('hitting example route');
// });

// menggunakan query dan params method
// app.get('/example/:name/:age', (req, res)=>{
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.name + " : " + req.params.age);
// });

