var express = require("express");
var path = require("path");
var app = express();
var PORT = 3005;
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "index.html"));
    
});
app.get("/notes", function(req, res){
    res.sendfile(path.join(__dirname, "notes.html"));
});
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});