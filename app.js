const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello Urvil")
})

app.get('/chai', (req, res) => {
    res.send("servechai")
})

app.get('/login', (req, res) => {
    res.send(`<h1>You are successfully logged in...</h1>`)
})

app.get('/urvil', (req, res) => {
    res.send(`<h1>Dear Urvil, how are you??</h1>`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})