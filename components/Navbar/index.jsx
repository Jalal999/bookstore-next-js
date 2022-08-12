import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import { Nav, MenuLinks, Logo, MenuLink } from "./NavbarStyle"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SwipeableDrawer } from '@mui/material';
import { useRouter } from "next/router";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminSidebar from './AdminSidebar';
import DefaultMenu from './DefaultMenu';
import CustomerMenu from './CustomerMenu';


const Navbar = () => {
    const router = useRouter();
    const [state, setState] = useState(false);

    const userState = useSelector((state) => state.user);
    const authenticated = userState.user.authenticated
    const userStatus = userState.user.status;

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(!state);
        open = state;
    };

    const toggleMenu = () => {
        setState(!state);
    }

    return (
        <AppBar style={{ position: "fixed" }}>
            <Nav>
                <Logo>
                    {(router.route !== '/' || (router.route !== '' && router.route !== '/')) &&
                        <ArrowBackIcon onClick={() => router.back()} />}
                    <Link href='/' passHref>
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
                        {!state ? <MenuIcon data-testid='click' color='inherit' onClick={toggleDrawer(true)} />
                            : <CloseIcon color='inherit' onClick={toggleDrawer(false)} />}
                    </MenuLink>
                </MenuLinks>
            </Nav>

            {state && !authenticated && <DefaultMenu onClick={toggleMenu} />}
            {state && authenticated && userStatus === 'customer' && <CustomerMenu onClick={toggleMenu} />}
            {state && authenticated && userStatus === 'Admin' &&
                <SwipeableDrawer
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <AdminSidebar />
                </SwipeableDrawer>
            }
        </AppBar>
    )
}

export default Navbar