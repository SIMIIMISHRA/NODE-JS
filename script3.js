const express = require('express');
const  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//middleware
app.use(function(req, res, next) {
    console.log('middleware running');
    next();
});

app.use(function(req, res, next) {
    console.log('another middleware running');
    next();
});


//route
app.get("/", function(req, res){
    res.send("Hey i simiiii mishra!");
});

app.get("/about", function(req, res){
    res.send("this  is about  page");    
});

app.get("/profile", function(req, res, next){
    return next(new Error("not implemented"));
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong, we don't have any idea what happened")
  })
  
app.listen(3000);