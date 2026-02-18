import express from 'express';

const app = express();

//importing routes
import notesRoute from './routes/notes.route.js';

app.use('/api/notes', notesRoute);


export default app;