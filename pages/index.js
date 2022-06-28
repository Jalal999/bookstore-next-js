import ProductList from '../components/ProductList'
import axios from 'axios'
import server from "../config"

export default function Home({ products }) {
  return (
    <>
      <ProductList productsList={products} />
    </>
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

