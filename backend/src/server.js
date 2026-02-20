import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.routes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());

//importing routes
import notesRoute from './routes/notes.route.js';

app.use('/api/notes', notesRoute);
app.use('/api/users', userRoute);


export default app;