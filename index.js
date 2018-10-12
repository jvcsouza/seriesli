const express = require("express");
const app = express();
const bodyparser = require("body-parser");

var port =  process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip    =  process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

app.use(bodyparser());
app.get("/teste", (req, resp) => {
    resp.send("DEU CERTO ESSA PORRA!")
});
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Alguma coisa ruim aconteceu!');
});
app.listen(port, ip);
console.log('Servidor rodando em http://%s:%s', ip, port);
module.exports = app;