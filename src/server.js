var express = require('express');
var bodyParser = require('body-parser');

var cors = require('cors');
var app = express();
require('dotenv').config();

app.use(bodyParser.json());

// Enable CORS support
app.use(cors());


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

const router = express.Router()


app.use("/api/v1", require("./routes"));

app.get('/', function (req, res) {
  res.send("Server is Running");
});

//app.listen(port, ip);
app.listen(port, function () {
  console.log('Started at port %s', port);
});