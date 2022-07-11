import axios from "axios";
import { Box } from "@mui/material";
import UpdateUserForm from "../../../components/Forms/UpdateUserForm";


const user = ({ user }) => {

    return (
        <Box>
            <UpdateUserForm user={user}/>
        </Box>
    )
}

export const getServerSideProps = async ({params}) => {
    const baseUrl = process.env.BASE_URL

    const res = await axios.get(`http://localhost:3000/api/user/${params.id}`);
  
    return {
      props: {
        user: res.data
      }
    }
};

export default user;