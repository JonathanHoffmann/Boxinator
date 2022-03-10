'use strict';

const express = require('express');
const cors = require('cors');
const PORT = 8080;

const app = express();
app.use(cors({
    credentials: true
}));
app.options('*', cors());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`HTML Server listening on port: `+ PORT);
    console.log("http://localhost:" + PORT + "/listboxes.html");
    console.log("http://localhost:" + PORT + "/addbox.html");
})

app.get('listboxes', (req, res) => {
    res.redirect('/listboxes.html')
});
app.get('addbox', (req, res) => {
    res.redirect('/addbox.html')
});
app.get('addbox2', (req, res) => {
    res.redirect('/colourpicker.js')
});