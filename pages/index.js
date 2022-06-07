import ProductList from '../components/ProductList'
import axios from 'axios'
import {server} from '../config';

export default function Home({ products }) {
  return (
    <>
      <ProductList productsList={products} />
    </>
  )
}

export const getServerSideProps = async () => {
  console.log(server)
  const res = await axios.get(`${server}/api/products`);
  return {
    props: {
      products: res.data,
    },
  };
};

