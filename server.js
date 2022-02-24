import {coinFlip, coinFlips, countFlips, flipACoin} from "./coin.mjs"
import minimist from "minimist";
import express from "express"
// dconst express = require('express')
const app = express()
const args = minimist(process.argv.slice(2))
args["port"]
const port = args.port || 5000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html')
//     res.end(data)
// })

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.writeHead(res.statusCode, {"Content-Type" : "text/plain"});
    res.end(res.statusCode + " " + res.statusMessage)
})

app.get('/app/flip/', (req, res) => {
    res.statusCode = 200;
    //res.writeHead(res.statusCode, {"Content-Type" : "text/plain"});
    res.send('{"flip":"' + coinFlip() + '"}');
})

app.get('/app/flips/:number/', (req, res) => {
    res.statusCode = 200;
    //res.writeHead(res.statusCode, {"Content-Type" : "text/plain"});
    const flip_array = coinFlips(req.params.number);
    const sum = countFlips(flip_array)
    res.send('{"raw":[' + flip_array + '],"summary":{"tails":' + sum.get("tails") + ',"heads":' + sum.get("heads") + '}}')
})

app.get('/app/flip/call/heads/', (req, res) => {
    res.statusCode = 200;
    //res.writeHead(res.statusCode, {"Content-Type" : "text/plain"});
    const map = flipACoin("heads");
    res.send('{"call":"' + map.get("call") + '","flip":"' + map.get("flip") + '","result":"' + map.get("result") + '"}')
})

app.get('/app/flip/call/tails/', (req, res) => {
    res.statusCode = 200;
    //res.writeHead(res.statusCode, {"Content-Type" : "text/plain"});
    const map = flipACoin("tails");
    res.send('{"call":"' + map.get("call") + '","flip":"' + map.get("flip") + '","result":"' + map.get("result") + '"}')
})

app.use(function(req, res){
    res.statusCode = 404;
    res.writeHead(res.statusCode, {"Content-Type" : "text/plain"});
    res.status(404).send("404 NOT FOUND")
});

const server = app.listen(port, () => {
    console.log("App listening on port " + port)
})

// autograder is up woooo
