import app from './server.js';

const PORT = process.env.PORT || 3001;
console.log(`PORT: ${PORT}`);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (_, res) => {
    res.send('Hello World!');
});

