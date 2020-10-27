
const express = require("express");
const mongoose = require("mongoose");
const bp=require("body-parser");
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({
    extended: true
  }));

app.use(express.static(__dirname + '/public'));

const db = "mongodb+srv://kvssankar:sankarvishnu23@cluster1.uacfw.mongodb.net/webproj?retryWrites=true&w=majority";

var userSchema = new mongoose.Schema({
    volunteer: String,
    phone: String,
    email: String,
    city:String,
    state:String,
    zip:String,
    profession:String,
    days:String,
    activities:String,
    pastExperienxe:String
});

var contactSchema=new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    subject:String,
    matter:String
})

var riskpredictor=new mongoose.Schema({
    name: String,
    email: String,
    score:String,
    matter: String
})

var user = mongoose.model("user", userSchema);
var contact = mongoose.model("contact", contactSchema);
var risk = mongoose.model("risk", riskpredictor);

//connect to mongo
const connect = mongoose
  .connect(db, { useFindAndModify: false })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.get("/volunteer", function (req, res) {
    res.sendFile(__dirname+"/form.html");
});

app.post("/volunteer",function(req,res){
    user.create({
        volunteer: req.body.name,
    phone: req.body.phone,
    email: req.body.eaddress,
    city:req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    profession: req.body.profession,
    days:req.body.day,
    activities:req.body.activity,
    pastExperienxe:req.body.contact
    },
    function (err, yolo) {
        if (err) {
            console.log("DATA IS NOT PUSHED");
        } else {
            console.log("DATA HAS BEEN PUSHED");
            res.sendFile(__dirname+"/index.html");
        }
    }
    )
});

app.post("/contactus",function(req,res){
    contact.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.eaddress,
        subject:req.body.subject,
        matter: req.body.matter
    },
    function (err, yolo) {
        if (err) {
            console.log("DATA IS NOT PUSHED");
        } else {
            console.log("DATA HAS BEEN PUSHED");
            res.sendFile(__dirname+"/index.html");
        }
    }
    )
});

app.get("/riskpredictor",function(req,res){
    res.sendFile(__dirname+"/riskpredictor.html");
})

app.post("/riskpredictor",function(req,res){
    risk.create({
        name: req.body.name,
        email: req.body.eaddress,
        score:req.body.score,
        matter: req.body.matter
    },
    function (err, yolo) {
        if (err) {
            console.log("DATA IS NOT PUSHED");
        } else {
            console.log("DATA HAS BEEN PUSHED");
            res.json({"score":req.body.score});
        }
    }
    )
});

app.get("/contactus",function(req,res){
    res.sendFile(__dirname+"/contact.html");
})

app.listen(process.env.PORT || 5000, function () {
    console.log("SERVER 8000 HAS STARTED");
});
