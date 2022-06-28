import Link from 'next/link'
import { SideLinks, SideLink, SidebarDiv } from './SidebarStyle';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, InboxIcon, MailIcon, ListItemText } from '@mui/material';

const drawerWidth = 200;

const Sidebar = () => {
    return (
        <SidebarDiv
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop: '70px',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link href='/admin'>Dashboard</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link href='/admin/users'>Users</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link href='/admin/products'>Products</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link href='/admin/orders'>Orders</Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </SidebarDiv>
    );
};

export default Sidebar;