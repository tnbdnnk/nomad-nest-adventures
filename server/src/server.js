import mongoose from 'mongoose';
import 'dotenv/config';

import app from './app.js';

mongoose.set('strictQuery', true);

const { DB, PORT } = process.env;

mongoose
    .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err.message);
        process.exit(1);
    });

// Optional: Additional connection error handling
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
});