import { Box } from "@mui/material";
import axios from "axios";
import PanelOrdersTable from "../../../components/PanelOrdersTable";

const Orders = ({ orders }) => {
    return (
        <Box>
            <PanelOrdersTable data={orders}/>
        </Box>
    )
}

export const getServerSideProps = async () => {
    console.log(process.env.BASE_URL)
    const baseUrl = process.env.BASE_URL
  
    const res = await axios.get(`${baseUrl}/api/orders`);
    return {
      props: {
        orders: res.data,
      },
    };
};


export default Orders;