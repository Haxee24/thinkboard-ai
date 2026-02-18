import express, { json } from 'express';

const app = express();
app.use(express.json());

//importing routes
import notesRoute from './routes/notes.route.js';

app.use('/api/notes', notesRoute);


export default app;