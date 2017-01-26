// Modules
var express = require(`express`);
var path = require(`path`);
var bodyParser = require('body-parser');
var multer = require('multer');
// var multerUploadHandler  = require('./uploadHandler'),
var app = express();

// Express Port/App Declaration
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())


require('./uploadHandler')(app);


// Routes
app.get(`*`, function(req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});



// Connection to PORT
app.listen(PORT, function() {
    console.log(`Listening On Port: ${PORT}`);
});
