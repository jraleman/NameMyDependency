const express = require('express');
const { validateNpm } = require('is-valid-package-name');
const cors = require('cors');
const { load: loadPackages, sync } = require('all-package-names');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.post('/verify_input', async (req, res) => {
    try {
        const { body } = req;
        const { value } = body;
        const [isValidName] = validateNpm(value);
        console.log({ isValidName });
        if (!isValidName) {
            res.status(200).send(false);
        }
        const { packageNames } = await loadPackages();
        const isValid = !packageNames.includes(value);
        console.log({ packageNames, isValid });
        res.status(200).send(isValid);
    } catch (error) {
        console.error({ error });
        res.status(500).send();
    }
});

app.get('/get_package_names', async (req, res) => {
    try {
        const { packageNames } = await loadPackages();
        console.log({ packageNames });
        res.status(200).send(packageNames);
    } catch (error) {
        console.error({ error });
        res.status(500).send();
    }
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
