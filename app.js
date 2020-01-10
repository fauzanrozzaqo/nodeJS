const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//penggunaan serve static in node js
app.use('/public',express.static('static'));
//membuat page kita dapat melewati url encoded
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/', (req,res)=>{
    //melihat apakah data dari form di index.html terbaca atau tidak
    console.log(req.body);
    //database work here
    res.send('succesfully posted data');
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

