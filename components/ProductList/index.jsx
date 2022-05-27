import Product from "./Product"


const ProductList = ({ productsList }) => {
    return(
        <div>
            {productsList.map((product) => 
                <Product key={product._id} product={product} />
            )}
        </div>
    )
}

export default ProductList