
// var exec = require('child_process').exec;
// var express = require('express');
// var app= express();

//var 

// var niclist;
//obtain uid number of a user for spawing a new console command
//var uidNumber = require("uid-number");
// uidNumber("su", function (er, uid, gid) {
//  console.log(uid); 
// });

//Check for monitor tools

//airmon start at the nic(var)
// var airmon_ng_start = spawn('airmon-ng',['start',nic]).on('error',function(err){console.log(err);});
// airmon_ng_start.stdout.on('data', function (data) {
// console.log(data.toString());
//// });
//
//inherit parent`s stdout stream

 //var airmon_ng_start = spawn('ping',['www.google.com'],{ stdio: ['pipe', process.stdout, process.stderr] });
// console.log("maybe its writing");
// app.get('/', function (req, res) {

// var airmon_ng= spawn('airmon-ng');
// airmon_ng.stdout.on('data', function (data) {
//   nicList = data.toString().split("\n");
//   res.send(niclist);//use for data binding
//   //.split("\t")[0]);
// });


// var airmon_ng_start = exec('ping www.google.com',{ 
//   timeout: 100000,
//   maxBuffer: 1000*1024,
//   killSignal: 'SIGTERM'},function(error, stdout, stderr){
//   	res.send(stdout);
//   });
// });
// var server = app.listen(3000, function () {

// var host = server.address().address;
// var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);

// });

var http = require('http');
 
http.createServer(function (req, res) {
    res.setHeader('Connection', 'Transfer-Encoding');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
 
    //console.log(req.url);
 
    res.write("<pre>");
 
    if (req.url == "/ping") {
 
        var child = require('child_process').spawn('ping', ['www.google.com']);
        // add a 'data' event listener for the spawn instance
        //child.stdout.pipe(res);
        child.stdout.on('data', function(data) {
 
        //     //console.log(data.toString('utf8'));
             res.write(data.toString() + "\n");
         });
 
        child.stdout.on('end', function(data) {
            res.end("DONE.</pre>");
        });
    };
 
 
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');