import axios from "axios";
import UpdateOrderForm from "../../../components/Forms/UpdateOrderForm";
import { getSession } from "next-auth/react"


const order = ({ order }) => {

  return (
    <>
      <UpdateOrderForm order={order} />
    </>
  )
}

export const getServerSideProps = async (context) => {
  const baseUrl = process.env.BASE_URL
  try {
    const session = await getSession({ req: context.req })
    console.log("admin", { session })
    if (session && session.user.status === 'Admin') {
      const res = await axios.get(`http://localhost:3000/api/orders/${context.params.id}`);
      return {
        props: {
          order: res.data
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

export default order;