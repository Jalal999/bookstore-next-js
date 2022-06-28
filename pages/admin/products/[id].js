import axios from "axios";
import { Box } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import UpdateProductForm from "../../../components/Forms/UpdateProductForm";


const product = ({ product }) => {

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <UpdateProductForm product={product}/>
        </Box>
    )
}

export const getServerSideProps = async ({params}) => {
    const baseUrl = process.env.BASE_URL

    const res = await axios.get(`${baseUrl}/api/products/${params.id}`);
  
    return {
      props: {
        product: res.data
      }
    }
};

export default product;