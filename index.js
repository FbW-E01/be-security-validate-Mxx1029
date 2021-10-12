import express from 'express';
import requestLogger from './middlewares/requestlogger.js';
import { getData, writeData } from './data.js';
import birdValidators from './birdValidators.js';
import { validationResult } from 'express-validator';

const app = express();
app.use(express.json());
app.use(requestLogger);

app.get('/birds', (req, res) => {
    const data = getData();
    res.json(data.birds);
});

app.post(
    '/birds', 
    birdValidators,
    (req, res) => {
        console.log(req.body);

        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.status(400);
            res.json({
                errors: result.errors.map(e => e.msg)
            });
            return;
        }
        const bird = req.body;
        const data = getData();
        data.birds.push(bird);
        writeData(data);

        res.status(201);
        res.json(bird);
});

app.listen(8090, () => {
    console.log("Listening to requests at http://localhost:8090")
})