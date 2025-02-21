import express from 'express';
const app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/bfhl', (req, res) => {
    res.status(200).send({ operation_code: 1 });
});
app.post('/bfhl', (req, res) => {
    const inputData = req.body?.data ?? [];
    console.log(req.body);
    const numbers = [];
    const alphabets = [];
    let highestAlphabet = null;
    for (const item of inputData) {
        if (item.length === 1 && /[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (highestAlphabet === null ||
                item.toUpperCase() > highestAlphabet.toUpperCase()) {
                highestAlphabet = item;
            }
        }
        else if (/^\d+$/.test(item)) {
            numbers.push(item);
        }
    }
    const response = {
        is_success: true,
        user_id: 'Praiya_Thakur_03122002',
        email: '20bcs5033@cuchd.in',
        roll_number: '20bcs5033',
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
    };
    res.send(response);
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map