import app from './server.js';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 3001;
console.log(`PORT: ${PORT}`);

try{
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} catch (err) {
    console.log("Error starting server\n", err);
}
