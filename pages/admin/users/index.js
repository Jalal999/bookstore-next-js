import { Box } from "@mui/material";
import axios from "axios";
import PanelUsersTable from "../../../components/PanelUsersTable";

const Users = ({ users }) => {
    return (
        <Box>
            <PanelUsersTable data={users} />
        </Box>
    )
}

export const getServerSideProps = async () => {
    console.log(process.env.BASE_URL)
    const baseUrl = process.env.BASE_URL
  
    const res = await axios.get(`http://localhost:3000/api/user`);
    return {
      props: {
        users: res.data,
      },
    };
};

export default Users;