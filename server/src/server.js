import mongoose from 'mongoose';
import 'dotenv/config';

import app from './app.js';

mongoose.set('strictQuery', true);

const { DB, PORT } = process.env;

mongoose
    .connect(DB)
    .then(app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    });