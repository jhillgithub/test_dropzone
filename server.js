// Modules
var express = require(`express`);
var path = require(`path`);
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({
    dest: './public/'
});
fs = require('fs');

// Express Port/App Declaration
var PORT = process.env.PORT || 3000;
var app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())


// app.put('/upload', upload.any(), function(req, res, next) {
//     console.log("made it to upload", req.files);
//     res.end(req.files);
// });
app.put('/upload', function(request, response) {
    console.log("request", request);
    // response.send('made it');
    // filePath = __dirname + '/public/data.jpg';
    // fs.appendFile(filePath, request.body, function () {
    //     response.end();
    // });
});

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
