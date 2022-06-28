import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";

const Users = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <div>
                User Content
            </div>
        </Box>
    )
}

export default Users;