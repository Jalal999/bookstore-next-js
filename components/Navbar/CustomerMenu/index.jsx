import { CustMenuDiv, CustMenuUl, CustMenuLink } from "./CustomerMenuStyle";
import { signOut } from "next-auth/react"

const CustomerMenu = () => {
    
    return (
        <CustMenuDiv>
            <CustMenuUl>
                <CustMenuLink><a href="/">home</a></CustMenuLink>
                <CustMenuLink><a href="/cart">cart</a></CustMenuLink>
                <CustMenuLink><a href="">my profile</a></CustMenuLink>
                <CustMenuLink><a href="">my orders</a></CustMenuLink>
                <CustMenuLink><a href="" onClick={() => signOut()}>logout</a></CustMenuLink>
            </CustMenuUl>
        </CustMenuDiv>
    );

};

export default CustomerMenu;