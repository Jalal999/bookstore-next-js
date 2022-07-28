import { Box } from "@mui/material";
import axios from "axios";
import PanelOrdersTable from "../../../components/PanelOrdersTable";
import { getSession } from "next-auth/react"

const Orders = ({ orders }) => {
  return (
    <Box>
      <PanelOrdersTable data={orders} />
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
      const res = await axios.get(`${baseUrl}/api/orders`);
      return {
        props: {
          orders: res.data,
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
    console.log("admin orders error", error)
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
};


export default Orders;