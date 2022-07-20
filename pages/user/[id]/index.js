import UserProfile from "../../../components/UserProfile";
import axios from 'axios'
import { getSession } from "next-auth/react"

const user = ({ user }) => {

    return (
        <>
            <UserProfile user={user} />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const baseUrl = process.env.BASE_URL

    try {
        const session = await getSession({ req: context.req })
        if (session && session.user.status === 'customer') {
            const res = await axios.get(`http://localhost:3000/api/user/${context.params.id}`);

            return {
                props: {
                    user: res.data
                }
            }
        } else {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false
                }
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
};

export default user;