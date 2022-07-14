import dbConnect from "../../../../util/mongo"
import User from "../../../../models/User"
import { errorHandler, responseHandler, validateAllOnce } from "../../../../util/common"
import bcrypt from "bcrypt";

export default async function handler(req, res) {

    if (req.method !== "POST") {
        errorHandler("Invalid Request Type", res);
    } else {
        try {
            const { name, email, password, address } = req.body;
            validateAllOnce(req.body);

            await dbConnect();

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
        } catch (error) {
            errorHandler(error, res);
        }
    }
}