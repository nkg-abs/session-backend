const express = require('express');
const { urlencoded, json } = express;
const app = express();
const sessionRouter = require('./router/session');

app.use(urlencoded());
app.use(json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', sessionRouter)

app.listen(5000, () => console.log('Listening to port 5000'));