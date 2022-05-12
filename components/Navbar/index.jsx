import Link from 'next/link'
import Card from '@mui/material/Card';
import { Nav, MenuLinks, Logo, MenuLink } from "./NavbarStyle"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <Card>
            <Nav>
                <Logo>
                    <Link href='/'>
                        BookStore
                    </Link>
                </Logo>
                <MenuLinks>
                    <MenuLink>
                        <Link href='/cart'>
                            <ShoppingCartIcon color='primary' />
                        </Link>
                    </MenuLink>
                    <MenuLink>
                        <MenuIcon color='primary'/>
                    </MenuLink>
                </MenuLinks>
            </Nav>
        </Card>
    )
}

export default Navbar