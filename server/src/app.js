import express from 'express';
import cors from 'cors';
import logger from 'morgan';
// import dotenv from 'dotenv';
// dotenv.config();
import 'dotenv/config';

import router from './routes/advertRoutes.js';

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/adverts", router);

// app.get('/', (req, res) => {
//     res.send('Hello world!');
// })

app.use((err, req, res, next) => {
    if (typeof err.status !== "undefined" && typeof err.message !== "undefined") {
        res.status(err.status).json({ message: err.message });
    } else {
        console.error(err.stack);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

export default app;