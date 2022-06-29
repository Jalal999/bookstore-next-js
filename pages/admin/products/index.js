import { Box } from "@mui/material";
import PanelProductTable from "../../../components/PanelProductTable";
import axios from "axios";

const Products = ({ products }) => {
    return (
        <Box>
            <PanelProductTable data={products} />
        </Box>
    )
}

export const getServerSideProps = async () => {
    console.log(process.env.BASE_URL)
    const baseUrl = process.env.BASE_URL
  
    const res = await axios.get(`${baseUrl}/api/products`);
    return {
      props: {
        products: res.data,
      },
    };
};

export default Products;