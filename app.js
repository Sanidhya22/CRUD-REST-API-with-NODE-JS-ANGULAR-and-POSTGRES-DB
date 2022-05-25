const express = require('express');
const app = express();
const routermethod = require("./routing/routes")

app.use(express.json());

app.use('/items',routermethod);

app.get('/', function (req, res) {
    res.send(' HomeTask 2 Node JS and Angular using Postgres ');
});
// on the request to root (localhost:3000/)
app.listen(3000, function () {
    console.log(' App listening on port 3000.');
});
