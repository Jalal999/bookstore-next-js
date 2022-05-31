import ProductList from '../components/ProductList'
import axios from 'axios'

export default function Home({ products }) {
  return (
    <>
      <ProductList productsList={products} />
    </>
  )
}

export const getServerSideProps = async () => {
  const homeUrl = process.env.HOME_URL

  const res = await axios.get(`/api/products`);
  return {
    props: {
      products: res.data,
    },
  };
};

