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

app.get('/urvilwedsdurva', (req, res) => {
    res.send(`<h1>Dear Urvil,</h1>
<p>Congratulations to you and Durva on your wedding! 💍❤️</p>
<p>I'm truly happy to see you both starting this beautiful new chapter of your lives together.</p>
<p>Wishing you a lifetime filled with love, happiness, understanding, endless laughter, and unforgettable memories.</p>
<p>May your bond grow stronger with every passing day, and may you both always support and inspire each other through every phase of life.</p>
<p>I'm so proud of you, brother.</p>
<p>Wishing you and Durva a joyful, successful, and blessed married life ahead.</p>
<p>Congratulations once again! 🎉🥂❤️</p>`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})