import { Item, ItemDesc } from "./OrderItemStyle";
import { Typography, CardMedia } from "@mui/material";

const OrderItem = ({ item }) => {
    return (
        <Item>
            <ItemDesc>
                <CardMedia
                    component="img"
                    sx={{ width: 60 }}
                    image={item.img}
                    alt="cart item img alt"
                />
                <Typography component="div" variant="h5">
                    {item.title}
                </Typography>
            </ItemDesc>
            <Typography component="div" variant="h6">
                    {item.description}
                </Typography>
            <Typography component="div" variant="h5">
                ${item.price}
            </Typography>
        </Item>
    )

}

export default OrderItem;
