const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
app.use(express.json());
app.use(cors());

const Vigenere = require('caesar-salad').Vigenere;

app.get("/", (req, res) => {
    res.send('Hello');
});

app.post("/encode", (req, res) => {
    let message = req.body;
    let response = Vigenere.Cipher(message.password).crypt(message.message);
    res.send(
        {"encoded": response}
    );
});

app.post("/decode", (req, res) => {
    let message = req.body;
    let response = Vigenere.Decipher(message.password).crypt(message.message);
    res.send(
        {"decoded": response}
    );
});

app.listen(PORT, () => {
    console.log('8000');
});