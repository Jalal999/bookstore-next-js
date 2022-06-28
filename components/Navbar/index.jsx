import Link from 'next/link'
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import { Nav, MenuLinks, Logo, MenuLink } from "./NavbarStyle"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Navbar = () => {
    const router = useRouter();
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
                        <MenuIcon color='inherit'/>
                    </MenuLink>
                </MenuLinks>
            </Nav>
        </AppBar>
    )
}

export default Navbar