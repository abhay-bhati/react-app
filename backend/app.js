require('dotenv').config();
const express = require('express');
const mongoConnect = require('./database').server;
const bodyParser = require('body-parser');
const router = require('./routes/appointment');
const authRouter = require('./routes/auth');


const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST, PATCH');
    next();
})

app.use('/abhay', (req, res, next) => {
    res.send('hellooooo');
})



app.use(authRouter);

app.use(router);





mongoConnect(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`listning at port`);
    });
})
