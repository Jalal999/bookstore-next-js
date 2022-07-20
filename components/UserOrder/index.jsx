import { OrderCard } from "./UserOrderStyle";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserOrder = ({ order, index }) => {
    return (
        <OrderCard sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Order: #{index}
                </Typography>
                <Typography variant="h6" component="div">
                    Total: {order.total}$
                </Typography>
                <Typography variant="body3">
                    Address: {order.address}
                </Typography>
                <Typography variant="body2">
                    Status: {order.status}
                </Typography>
            </CardContent>
        </OrderCard>
    )
}

export default UserOrder;