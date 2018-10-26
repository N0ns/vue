const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'meizu';
 
var request = require("request");
var cheerio = require("cheerio");
var arr = [];
request("https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311%2C312%2C313%2C314%2C315%2C316%2C317%2C318%2C319%2C320%2C321%2C322%2C323%2C326%2C327%2C328&_=1540000550590&callback=dms_jsonp", (err, res, body) => {
    // console.log(body)
    var $ = cheerio.load(body);
    var data = body.substring(10,body.length-1);
    console.log(JSON.parse(data)[10])
})





