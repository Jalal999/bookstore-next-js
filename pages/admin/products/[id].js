import axios from "axios";
import { Box } from "@mui/material";
import UpdateProductForm from "../../../components/Forms/UpdateProductForm";
import { getSession } from "next-auth/react"


const product = ({ product }) => {

  return (
    <Box>
      <UpdateProductForm product={product} />
    </Box>
  )
}

export const getServerSideProps = async (context) => {
  const baseUrl = process.env.BASE_URL

  try {
    const session = await getSession({ req: context.req })
    console.log("admin", { session })
    if (session && session.user.status === 'Admin') {
      const res = await axios.get(`${baseUrl}/api/products/${context.params.id}`);

      return {
        props: {
          product: res.data
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

export default product;