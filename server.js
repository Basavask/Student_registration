const path = require('path');

const express = require('express');
const cors = require('cors')
const app = express();

const mongoConnect = require('./util/db-connect').mongoConnect;
const registerRoute = require('./server/routes/register');
const retrieveDataRoute = require('./server/routes/retrieveData');
const jwt = require("jsonwebtoken");
var expressJWT = require('express-jwt');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cors());
app.options('*', cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ extended: true }));

//--------routes------------
app.use('/admin', registerRoute);
app.use('/admin', retrieveDataRoute);


//SECRET FOR JSON WEB TOKEN
let secret = '123456789';

//ALLOW PATHS WITHOUT TOKEN AUTHENTICATION
app.use(expressJWT({ secret: secret, algorithms: ['sha1', 'RS256', 'HS256'] })
    .unless(
        {
            path: [
                '/token/sign'
            ]
        }
    ));

/* CREATE TOKEN FOR USE */
app.get('/token/sign', (req, res) => {
    var userData = {
        "name": "basavask",
        "id": "8463"
    }
    let token = jwt.sign(userData, secret, { expiresIn: '150s' })
    res.status(200).json({ "token": token });
});

app.get('/path1', (req, res) => {
    res.status(200)
        .json({
            "success": true,
            "msg": "Secrect Access Granted"
        });
});

mongoConnect(client => {
    app.listen(3000);
});
