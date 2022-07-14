import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../models/User';
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                const { email, password } = credentials;
                console.log({ email, password })
                const user = await User.findOne({ email }).exec();

                if(!user) {
                    throw new Error("Something went wrong...")
                }
                const userDoc = user._doc;
                const isMatched = await bcrypt.compare(password, userDoc.password);

                if (user && isMatched) {
                    return userDoc
                } else {
                    throw new Error("Email or Password Incorrect..!") 
                }
            }
        })
    ],
    callbacks: {
        async session({ session, user, token }) {
            console.log('session', { session, user })
            if (token && token.id) {
                session.user.id = token.id;
                session.user.status = token.status;
            }
            // if (user && user.id) {
            //     session.user.id = user.id;
            // }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log('session', {token, user})
            if (user && user._id) {
                token.id = user._id;
                token.status = user.status;
            }
            return token
        }
    }
})