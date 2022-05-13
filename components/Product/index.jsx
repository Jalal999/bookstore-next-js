import Link from 'next/link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ProductHeading, ProductCard } from './ProductStyle';

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
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </ProductCard>
        </Link>
    )
}

export default Product;