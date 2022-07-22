let express = require('express');

let app = express();
app.use(express.static(__dirname+'/dist/angular10'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname+'/dist/angular10/index.html')
})

app.listen(process.env.PORT || 8000);