import Order from "../../../../models/Order";
import { errorHandler, responseHandler } from "../../../../util/common";

export default async function handler(req, res) {
    try {
        const { id } = req.body;
        const orders = await Order.find({ customer: id })
            .select("total address status")
            .exec()

        if(orders) {
            responseHandler(orders, res);
        } else {
            errorHandler("Something went wrong", res, 404);
        }
    } catch(err) {
        errorHandler(err, res);
    }
}