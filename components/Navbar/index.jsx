import Link from 'next/link'
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import { Nav, MenuLinks, Logo, MenuLink } from "./NavbarStyle"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { SwipeableDrawer } from '@mui/material';


const Navbar = () => {
    const router = useRouter();
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
          event &&
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
        setState( open );
    };

    return (
        <AppBar style={{position: "fixed"}}>
            <Nav>
                <Logo>
                    {(router.route !== '/' || (router.route !== '' && router.route !== '/')) &&
                    <ArrowBackIcon onClick={() => router.back()} />}
                    <Link href='/'>
                        BookStore
                    </Link>
                </Logo>
                <MenuLinks>
                    <MenuLink>
                        <Link href='/cart'>
                            <ShoppingCartIcon color='inherit' />
                        </Link>
                    </MenuLink>
                    <MenuLink>
                        <MenuIcon color='inherit' onClick={toggleDrawer(true)}/>
                    </MenuLink>
                </MenuLinks>
            </Nav>
            <SwipeableDrawer
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Sidebar />
            </SwipeableDrawer>
        </AppBar>
    )
}

export default Navbar