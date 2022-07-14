import Link from 'next/link'
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import { Nav, MenuLinks, Logo, MenuLink } from "./NavbarStyle"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AdminSidebar from './AdminSidebar';
import { useState } from 'react';
import { SwipeableDrawer } from '@mui/material';
import DefaultMenu from './DefaultMenu';
import { useSelector } from 'react-redux';
import CustomerMenu from './CustomerMenu';


const Navbar = () => {
    const router = useRouter();
    const [state, setState] = useState(false);
    // const [userType, setUserType] = useState(null);

    const userState = useSelector((state) => state.user);
    const authenticated = userState.user.authenticated
    console.log(userState.user)
    const userStatus = userState.user.status;
    console.log(authenticated + "   userStatus: " + userStatus);


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

    return (
        <AppBar style={{ position: "fixed" }}>
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
                        <MenuIcon color='inherit' onClick={toggleDrawer(true)} />
                    </MenuLink>
                </MenuLinks>
            </Nav>

            {state && !authenticated && <DefaultMenu />}
            {state && authenticated && userStatus === 'customer' && <CustomerMenu />}
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