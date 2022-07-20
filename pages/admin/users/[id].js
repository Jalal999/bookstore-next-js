import axios from "axios";
import { Box } from "@mui/material";
import UpdateUserForm from "../../../components/Forms/UpdateUserForm";
import { getSession } from "next-auth/react"


const user = ({ user }) => {

  return (
    <Box>
      <UpdateUserForm user={user} />
    </Box>
  )
}

export const getServerSideProps = async (context) => {
  const baseUrl = process.env.BASE_URL

  try {
    const session = await getSession({ req: context.req })
    if (session && session.user.status === 'Admin') {
      const res = await axios.get(`http://localhost:3000/api/user/${context.params.id}`);

      return {
        props: {
          user: res.data
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
};

export default user;