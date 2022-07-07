import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 30,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        maxlength: 100
    }
}, {
    timestamps: true
});

export default mongoose.models.User || mongoose.model("User", UserSchema);