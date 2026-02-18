import mongoose, {Schema} from 'mongoose';

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    content: {
        type: String,
        default: "",
        maxLength: 1000
    },
    maker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true});

export default mongoose.model("Note", noteSchema);