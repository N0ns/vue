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

var app = express();
app.get("/test",function(req,res){

    request("https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311%2C312%2C313%2C314%2C315%2C316%2C317%2C318%2C319%2C320%2C321%2C322%2C323%2C326%2C327%2C328&_=1540000550590&callback=dms_jsonp", (err, result, body) => {
        // console.log(body)
        var $ = cheerio.load(body);
        var data = body.substring(10,body.length-1);
        data = JSON.parse(data)

        var arr = [data.block_317,data.block_318,data.block_319,data.block_320,data.block_321,data.block_322,data.block_323];
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<arr[i].length;j++){
                if(i==0){
                    arr[i][j].type='phone'
                }else if(i==1||i==2){
                    arr[i][j].type='ears';
                }else if(i==3||i==4){
                    arr[i][j].type='parts';
                }else {
                    arr[i][j].type='life'
                }
                
            }
            
        }

        res.send(arr)
        // console.log(data.block_317)

        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
          // console.log("Connected successfully to server");
         
            const db = client.db(dbName);
             
              // Get the documents collection
            const collection = db.collection('test');
              // Insert some documents
              arr.forEach(function(item,idx){
                collection.insertMany(item, function(err, result) {
                    console.log(result);


              
                    });
              })
            
                    client.close();
        })






    })



    
//     MongoClient.connect(url, function(err, client) {
//         assert.equal(null, err);
//         console.log("Connected successfully to server");
//         client.close();
//     });

})
app.listen(3000);