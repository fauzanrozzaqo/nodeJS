const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();


//penggunaan serve static in node js
app.use('/public',express.static('static'));
//membuat page kita dapat melewati url encoded
app.use(bodyParser.urlencoded({extended: false}));

//utk mengirim json
//app.use(bodyParser.json());

//menyediakan form kepada user
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

//mengambil data form dari user
app.post('/', (req,res)=>{
    //melihat apakah data dari form di index.html terbaca atau tidak
    console.log(req.body);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });

    //memverifikasi data dari user
    Joi.validate(req.body, schema, (err, result)=>{
        if(err){
            console.log(err);
            res.send('an errors has occured');
        }
        console.log(result);
        res.send('successfully posted data')
    });

    //database work here
    //res.send('succesfully posted data');
    //res.json({success : true});
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

