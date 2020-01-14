const express = require('express');
const path = require('path');
const app = express();

//penggunaan serve static in node js
app.use('/public',express.static('static'));
//menyediakan dynamic data
//membuat views folder express mengenalinya karena default namenya adalah views
app.set('view engine', 'ejs');
//menyediakan form kepada user
app.get('/:userQuery',(req,res)=>{
    res.render('index',{data : {userQuery: req.params.userQuery,
        searchResults : ['book1', 'book2', 'book3'],
        loggedIn : true,
        username : 'Fauzan Rozzaqo Kusuma'
    }});
});

app.listen(3000);