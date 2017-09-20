var express = require('express')
var app = express()

app.use(express.static('public'));
app.use(express.static('views'));


app.set('port', process.env.PORT || 8080);

require('./api/employee')(app); 


app.get('/', function (request, response) {
    response.sendFile('index.html');
})

app.listen(app.get('port'), function () {
    console.log('KoodiKerho server running on port ' + app.get('port') + "!");
})