import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const connectionInstance = mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected!!");
    } catch (err) {
        console.log("MongoDB connection FAILED\n", err);
    }
}

export default connectDB;