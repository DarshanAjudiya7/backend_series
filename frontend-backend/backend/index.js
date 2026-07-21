import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("chai aur backend is running");
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})