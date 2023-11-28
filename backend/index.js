import express from "express";
import cors from "cors";
import routes from './routes/routes.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.use(cookieParser());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use`);
    } else {
        console.error(err.message);
    }
    process.exit(1); // Exit the process if there is an error starting the server
});
