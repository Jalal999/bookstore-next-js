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
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  return {
    props: {
      products: res.data,
    },
  };
};

