var express = require("express");

var app = express();

const PORT = process.env.PORT || 5000

const HEROKU_LINK = "";

//app.use(express.static(path.join(__dirname, "dist")))

app.get("/", (req, res) => {
    res.end("Bonjour");
});

app.get("/**", (req, res) => {
    res.end("Error try this link: " + HEROKU_LINK);
});

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});