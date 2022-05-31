import Link from 'next/link'
import { CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { ProductHeading, ProductCard, ProductDesc } from './ProductStyle';

const Product = ({ product }) => {
    return (
        <Link href={`/product/${product._id}`}>
            <ProductCard>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    width="100%"
                    image={product.img}
                    alt="book1"
                    />
                    <ProductHeading>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            ${product.price}
                        </Typography>
                    </ProductHeading>
                    <CardContent sx={{paddingTop: "0"}}>
                        <ProductDesc variant="body2" color="text.secondary">
                            {product.description.slice(0, 50)}...
                        </ProductDesc>
                    </CardContent>
                </CardActionArea>
            </ProductCard>
        </Link>
    )
}

export default Product;