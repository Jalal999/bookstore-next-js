import { Box } from "@mui/material";
import axios from "axios";
import PanelUsersTable from "../../../components/PanelUsersTable";
import { getSession } from "next-auth/react"


const Users = ({ users }) => {
  return (
    <Box>
      <PanelUsersTable data={users} />
    </Box>
  )
}

export const getServerSideProps = async (context) => {
  console.log(process.env.BASE_URL)
  const baseUrl = process.env.BASE_URL

  try {
    const session = await getSession({ req: context.req })
    if (session && session.user.status === 'Admin') {
      const res = await axios.get(`http://localhost:3000/api/user`);
      return {
        props: {
          users: res.data,
        },
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

export default Users;