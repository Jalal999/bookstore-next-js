import mongoose from "mongoose"
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
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
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending',
    },
    },
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);