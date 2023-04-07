const express = require("express");
const app = express();

const auth = require("./modules/auth");

app.use(express.json())

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("H");

});

app.post("/user", (req, res) => {
    res.send(auth.authenticate(req.body));
});

app.listen(PORT, () => {
    console.log(`Server is up! (Port ${PORT})`)
})