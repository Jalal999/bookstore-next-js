import Head from 'next/head'
import Product from '../components/Product'
import Cart from './cart'
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
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      products: res.data,
    },
  };
};

