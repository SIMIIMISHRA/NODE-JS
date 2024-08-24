//show the public static path
//const path =require('path');
//console.log(path.join(__dirname +  "/public"));
const express = require('express');
const  app = express();
const path  = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index");

});

//route  for  ur

app.get("/profile/:username", function(req, res) {
    res.send(`welcome, ${req.params.username}`);
});

//dynamic username  //age ...
app.get("/author/:username/:age", function(req, res) {
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
});
app.listen(3000, function() {
    console.log("its running");
})