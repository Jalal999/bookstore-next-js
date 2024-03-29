import { getSession } from "next-auth/react"

export const getServerSideProps = async (context) => {
    try {
        const session = await getSession({ req: context.req })
        console.log("admin", { session })
        if (session && session.user.status === 'Admin') {
            return {
                props: {
                    user: session.user
                }
            }
        } else {
            return {
                redirect: {
                    destination: '/',
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
}

const Index = ({ user }) => {
    return (
        <>
            <h1>Welcome, {user.name}</h1>
            <p>Dashboard Content</p>
        </>
    )
}

export default Index;