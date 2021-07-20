const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(__dirname + 'dist/yourmemories'));
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + 'dist/yourmemories/index.html'))
});
app.listen(process.env.PORT || 8080);