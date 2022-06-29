import axios from "axios";
import { Box } from "@mui/material";
import UpdateProductForm from "../../../components/Forms/UpdateProductForm";
import UpdateOrderForm from "../../../components/Forms/UpdateOrderForm";


const order = ({ order }) => {

    return (
        <Box>
            <UpdateOrderForm order={order}/>
        </Box>
    )
}

export const getServerSideProps = async ({params}) => {
    const baseUrl = process.env.BASE_URL

    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  
    return {
      props: {
        order: res.data
      }
    }
};

export default order;