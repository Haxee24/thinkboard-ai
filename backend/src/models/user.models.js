import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 30,
        match: /^[a-zA-Z0-9]+$/,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    notes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Note",
        default: []
    }
}, {timestamps: true});

export default mongoose.model("User", userSchema);