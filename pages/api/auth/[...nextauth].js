import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../models/User';
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
                const { email, password } = credentials;
                console.log({ email, password })

                const user = await User.findOne({ email }).exec();
                if(!user) {
                    throw new Error("Something went wrong...")
                }
                const userDoc = user._doc;
                const isMatched = await bcrypt.compare(password, userDoc.password);

                if (user && isMatched) {
                    // Any object returned will be saved in `user` property of the JWT
                    return userDoc
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    // return null
                    throw new Error("Email or Password Incorrect..!") 
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    callbacks: {
        async session({ session, user, token }) {
            console.log('session', { session, user })
            // if (token && token.id) {
            //     session.user.id = token.id;
            // }
            if (user && user.id) {
                session.user.id = user.id;
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log('session', {token, user})
            if (user && user._id) {
                token.id = user._id;
            }
            return token
        }
    }
})