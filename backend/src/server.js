import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.routes.js';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

//importing routes
import notesRoute from './routes/notes.route.js';

app.use('/api/notes', notesRoute);
app.use('/api/users', userRoute);


export default app;