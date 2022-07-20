import mongoose from "mongoose"
const Schema = mongoose.Schema;

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
    },
    status: {
        type: String,
        required: true,
        default: 'customer'
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
}, {
    timestamps: true
});

export default mongoose.models.User || mongoose.model("User", UserSchema);