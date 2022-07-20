import { Box } from "@mui/material";
import PanelProductTable from "../../../components/PanelProductTable";
import axios from "axios";
import { getSession } from "next-auth/react"

const Products = ({ products }) => {
  return (
    <Box>
      <PanelProductTable data={products} />
    </Box>
  )
}

export const getServerSideProps = async (context) => {
  console.log(process.env.BASE_URL)
  const baseUrl = process.env.BASE_URL

  try {
    const session = await getSession({ req: context.req })
    console.log("admin", { session })
    if (session && session.user.status === 'Admin') {
      const res = await axios.get(`${baseUrl}/api/products`);
      return {
        props: {
          products: res.data,
        },
      };
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

export default Products;