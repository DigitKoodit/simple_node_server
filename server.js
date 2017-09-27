var express = require('express')
var app = express()
var employees = require('./dummydata');

app.use(express.static('public'));
app.use(express.static('views'));


app.set('port', process.env.PORT || 8080);

// require('./api/employee')(app); 

app.get('/employee/getEmployees', function(request, response) {
    
            console.log("----------------------------------------------");
            console.info('server got a request');
    
            employees.getEmployees(function(data) {
                console.info('callback-function executing');
                response.status(200).send(data);
            })
    
            console.info('this line is after the data query');
        
        })


app.get('/', function (request, response) {
    response.sendFile('index.html');
})

app.listen(app.get('port'), function () {
    console.log('KoodiKerho server running on port ' + app.get('port') + "!");
})