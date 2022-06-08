import ProductDetails from "../../components/ProductDetails";
import axios from 'axios'

const product = ({ product }) => {
    return (
        <>
            <ProductDetails product={product} />
        </>
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