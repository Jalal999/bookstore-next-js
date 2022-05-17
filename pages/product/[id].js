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
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  
    return {
      props: {
        product: res.data
      }
    }
};

export default product;