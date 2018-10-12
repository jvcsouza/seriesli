const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.get("/teste", (req, resp) => {
    resp.send("DEU CERTO!");
})