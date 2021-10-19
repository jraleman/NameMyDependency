const express = require('express');
const { validateNpm } = require('is-valid-package-name');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.post('/verify_input', (req, res) => {
    try {
        const { body } = req;
        const { value } = body;
        const [isValid] = validateNpm(value);
        console.log({ isValid });
        res.status(200).send(isValid);
    } catch (error) {
        console.error({ error });
        res.status(500).send();
    }
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
