var express = require('express')
var app = express()

app.use(express.static('public'));


app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.send("Koodikerho lähettää tekstiä!");
//   res.sendFile('views/index.html' , { root : __dirname});
})

app.listen(app.get('port'), function () {
  console.log('Node-express server running on port ' + app.get('port') + "!"); 
})