import ProductList from '../components/ProductList'
import axios from 'axios'
import {server} from '../config';
import { env } from process

export default function Home({ products }) {
  return (
    <>
      <ProductList productsList={products} />
    </>
  )
}

export const getServerSideProps = async () => {
  console.log(process.env.APP_ENV_BASE_URL)
  const res = await axios.get(`${env.APP_ENV_BASE_URL}/api/products`);
  return {
    props: {
      products: res.data,
    },
  };
};

