import dbConnect from '../../../util/mongo';
import Order from '../../../models/Order';

export default async function handler(req,res) {
    const { method, query: { id } } = req;

    dbConnect();

    if(method === "GET") {
        try{
            const order = await Order.findById(id)
            res.status(200).json(order)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "PUT") {
        console.log(req.body)
        try{
            const { customer, email, total, status } = req.body;
            const order = await Order.findOneAndUpdate({_id: id}, req.body)
            res.status(201).json(order)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "DELETE") {
        try{
            await Order.findByIdAndDelete(id)
            res.status(201).json("The order is deleted...")
        }catch(err){
            res.status(500).json(err)
        }
    }
}