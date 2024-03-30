const express = require('express');
const app = express();
const PORT = 8080;
const {calcPressao} = require('./equations/valuesConv');

//Middleware to parse JSON bodies
app.use(express.json());

//POST endpoint to handle calculation
app.post('/calculate', (req, res) => {
    const {value} = req.body;
    //calculation
    const result = Math.pow(value,2); 
    res.json({result});
    console.log("Math POW",result);
});

app.post('/calculate/pressao', (req, res) => {
    const {forca, area} = req.body
    const result = calcPressao(forca, area);
    res.json({result});
    console.log('pressao = ',result, 'Pascal');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});