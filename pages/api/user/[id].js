import dbConnect from '../../../util/mongo';
import User from '../../../models/User';

export default async function handler(req,res) {
    const { method, query: { id } } = req;

    dbConnect();

    if(method === "GET") {
        try{
            const user = await User.findById(id)
            res.status(200).json(user)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "PUT") {
        console.log(req.body)
        try{
            const { name, email, password, address } = req.body;
            const user = await User.findOneAndUpdate({_id: id}, req.body)
            res.status(201).json(user)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "DELETE") {
        try{
            await User.findByIdAndDelete(id)
            res.status(201).json("The user is deleted...")
        }catch(err){
            res.status(500).json(err)
        }
    }
}