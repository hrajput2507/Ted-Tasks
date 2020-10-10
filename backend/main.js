var app = require("express");
var application = app();
var cors = require("cors");
var jwt = require("jwt-simple")
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/users");
var post = require("./models/posts");
const auth= require("./helpers/api-auth");
const { decode } = require("punycode");




application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());
application.use(cors({ origin: 'http://localhost:4200' }));
application.get("/post", (req, res) => {
  res.send(post);
});


application.post("/forms", (req, res) => { 
  console.log('checkdata',req.body);
 // console.log(req.params);
 // console.log(req.query)
  var userData = req.body; 

 var user = new User(userData);
  console.log(user)
  user.save((error, result) => {
    if (error){
      console.log("userData", userData);
    }
    console.log("data save successfully");
    res.sendStatus(200);
  });
});


application.post("/login", async (req, res) => {
    console.log('#########', req.body);
   // console.log(req.params);
    var userData = req.body;

    var user = await User.findOne({email: userData.email});
    if(!user){
    return res.status(401).send({message: 'Email or password Invalid'})
    }
    if(userData.password != user.password){
    return res.status(401).send({message: 'Email or password Invalid'})
    }
    var payload =  user;
    var secret = 'xxx';
   // var paytoken = {};
    var token = jwt.encode(payload, secret);
     console.log("token" ,token);
    console.log(user);
//var payload = { foo: 'bar' };
 if(token){
    res.status(200).send({token});
    }
  });
  



  

  application.post("/posts", (req, res) => {
    var decoded = jwt.decode(req.body.token, 'xxx');
    console.log(decoded); 
    post.create({
      "userId":decoded._id
    } 
     , (err, results) => {
      if(err) {
        //  if(err) return res.send({'code':210,'message':'Database error.','data':[]});
      } else {
         // res.send({'code':200,'message':'Sucess.','data':{"Name":results.name,"Email":results.email,"Phone Number":results.phoneNumber,"Status":results.isStatus}});
     console.log(results)
        }
  });
  
  }); 
  








mongoose.connect(
  "mongodb+srv://hrajput2507:Heenu@1997@first-task.syaet.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser: true,
  },
  (error) => {
    if (!error) {
      console.log("connection succesfull created");
    }
  }
);

application.listen(1220);
