import axios from 'axios'
import { getSession } from "next-auth/react"
import { getUserOrders } from '../../../../util/common';
import UserOrder from "../../../../components/UserOrder";
import { Typography } from '@mui/material';

const orders = ({ orders }) => {
  return (
    <>
      <Typography variant="h6" component="div">
        My Orders:
      </Typography>      
      {orders.map((order, index) =>
        <UserOrder order={order} index={index} />
      )}
    </>
  )
}

export const getServerSideProps = async (context) => {
  const baseUrl = process.env.BASE_URL

  try {
    const session = await getSession({ req: context.req })
    if (session && session.user.status === 'customer') {
      const userOrders = await getUserOrders({ id: session.user.id });
      return {
        props: {
          orders: userOrders.body
        }
      }
    } else {
      return {
        redirect: {
          destination: '/login',
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
  return;
};

export default orders;