import dbConnect from "../../../util/mongo"
import User from "../../../models/User"
import bcrypt from "bcrypt";


export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if(method === "GET") {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch(err) {
            res.status(500).json(err)
        }
    }

    if(method === "POST") {
        try {
            const { name, email, password, address } = req.body;
            // validateAllOnce(req.body);


            const hashPassword = await bcrypt.hash(password, 8)

            const user = new User({
                ...req.body,
                password: hashPassword
            })
            const saveUser = await user.save();

            if (saveUser) {
                const userDoc = saveUser._doc;
                delete userDoc.password;
                responseHandler(userDoc, res, 201);
            } else {
                errorHandler('Something went wrong!!!')
            }
        } catch(err) {
            errorHandler(error, res);
            res.status(500).json(err);
        }
    }
}