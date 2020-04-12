require('./config/config');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/sequelize.connection');



const app = express();

//connection from db here
db.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,  'public')));

//  adding routes
require('./routes')(app);
require('./schemas/index');
app.listen(3003, () => {
    console.log("Server is up on port", 3003)
});

module.exports = app;