import Link from 'next/link'
import { List, ListItem, ListItemButton } from '@mui/material';


const drawerWidth = 200;

const Sidebar = () => {   
    const sidebarItems = [ 
        {menuitem:"Dashboard", link:'/admin'},
        {menuitem:"Users", link:'/admin/users'},
        {menuitem:"Products", link:'/admin/products'},
        {menuitem:"Orders", link:'/admin/orders'},
    ]
    
    return (
            <List>
                {sidebarItems.map((item, index) => 
                    <ListItem disablePadding key={index}>
                        <ListItemButton>
                            <Link href={item.link} passHref>{item.menuitem}</Link>
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
    );
};

export default Sidebar;