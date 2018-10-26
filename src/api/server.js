// Connection URL
var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'meizu';
 var crypto = require('crypto');

var ObjectID = require('mongodb').ObjectID;

var app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.get("/test",function(req,res){
    res.send('hello world')

})
//注册
app.post('/resign', function(req, res) {
    // connection.connect(); //进行连接
    //跨域
    res.append("Access-Control-Allow-Origin", "*");

    MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
          // console.log("Connected successfully to server");
         
            const db = client.db(dbName);
             
              // Get the documents collection
            const collection = db.collection('user');
              // Insert some documents
                 var md5 = crypto.createHash('md5');
                md5.update(req.body.password);
                req.body.password = md5.digest('hex');

                collection.find({name: req.body.name}).toArray(function(err, result) {
                    if (err) {
                      console.log('Error:' + err);
                      return;
                    }
                    // console.log(result)
                    if(result.length===0){
                        collection.insertMany([req.body], function(err, re) {    

                            res.send('注册成功') 
                            client.close();         
                            });
                    }else{

                        res.send('注册账号已存在')
                    }

                });        
        })

})
//登录
app.post('/login', function(req, res) {
    // connection.connect(); //进行连接
    //跨域
    res.append("Access-Control-Allow-Origin", "*");


    MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
          // console.log("Connected successfully to server");
         
            const db = client.db(dbName);
             
              // Get the documents collection
            const collection = db.collection('user');
              // Insert some documents
                 var md5 = crypto.createHash('md5');
                md5.update(req.body.password);
                req.body.password = md5.digest('hex');

                collection.find(
                    {
                        $and: [{name: req.body.name}, {password: req.body.password}]
                    }
         ).toArray(function(err, result) {
                    if (err) {
                      console.log('Error:' + err);
                      return;
                    }

                    // res.send(result)
                    if(result.length===0){
                        collection.find({name:req.body.name}).toArray(function(err, re) {
                            if(re.length===!0){
                                res.send('密码错误')
                            }else{
                                res.send('请注册后再登录')
                            }
                        })
                                    
                    }else{

                        res.send('登录成功')
                        client.close();
                    }

                });        
        })

})


app.get("/goodslist",function(req,res){
    res.append("Access-Control-Allow-Origin", "*");

        

        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
          // console.log("Connected successfully to server");
         
            const db = client.db(dbName);
             
              // Get the documents collection
            const collection = db.collection('test');
            collection.find({}).toArray(function(err, result) {
                if (err) {
                  console.log('Error:' + err);
                  return;
                }
                // console.log(result);
                res.send(result)
              });
            
                    client.close();
        })


})

app.get("/type",function(req,res){
    res.append("Access-Control-Allow-Origin", "*");


        // console.log(req.query)

        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
          // console.log("Connected successfully to server");
         
            const db = client.db(dbName);
             
              // Get the documents collection
            const collection = db.collection('test');
            collection.find({type: req.query.type}).toArray(function(err, result) {
                if (err) {
                  console.log('Error:' + err);
                  return;
                }
                // console.log(result);
                res.send(result)
              });
            
                    client.close();
        })

})

app.get("/details",function(req,res){
    res.append("Access-Control-Allow-Origin", "*");


        // console.log(req.query.id)

        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
          // console.log("Connected successfully to server");
            var id= req.query.id
            const db = client.db(dbName);
             // console.log(id)
              // Get the documents collection
            const collection = db.collection('test');

            // "_id" : ObjectId("5bcadb669c1ffe393c39b69b")
            collection.find({_id:ObjectID(id)}).toArray(function(err, result) {
                if (err) {
                  console.log('Error:' + err);
                  return;
                }
                // console.log(result);
                res.send(result)
              });
            
                    client.close();
        })

})




app.listen(4000);