import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        maxlength: 30
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending',
    },
    },
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);