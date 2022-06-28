import dbConnect from '../../../util/mongo';
import Product from '../../../models/Product';

export default async function handler(req,res) {
    const { method, query: { id } } = req;

    dbConnect();

    if(method === "GET") {
        try{
            const product = await Product.findById(id)
            res.status(200).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "PUT") {
        console.log(req.body)
        try{
            const { title, desc, img, price, amount } = req.body;
            const product = await Product.findOneAndUpdate({_id: id}, req.body)
            res.status(201).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "DELETE") {
        try{
            await Product.findByIdAndDelete(id)
            res.status(201).json("The product is deleted...")
        }catch(err){
            res.status(500).json(err)
        }
    }
}