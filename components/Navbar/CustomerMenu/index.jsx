import { CustMenuDiv, CustMenuUl, CustMenuLink } from "./CustomerMenuStyle";
import { signOut } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_FAILURE } from "../../../redux/userSlice";
import Link from "next/link";

const CustomerMenu = () => {
    const userState = useSelector((state) => state.user);
    console.log(userState.user)
    const userID = userState.user.id;

    const dispatch = useDispatch();

    return (
        <CustMenuDiv>
            <CustMenuUl>
                <CustMenuLink><Link href="/">home</Link></CustMenuLink>
                <CustMenuLink><Link href="/cart">cart</Link></CustMenuLink>
                <CustMenuLink><Link href={`/user/${userID}`}>my profile</Link></CustMenuLink>
                <CustMenuLink><Link href={`/user/${userID}/orders`}>my orders</Link></CustMenuLink>
                <CustMenuLink>
                    <a href="" onClick={() => signOut({
                        redirect: true
                    }).then(result =>
                        dispatch(LOGIN_FAILURE()))}>
                            logout
                        </a>
                </CustMenuLink>
            </CustMenuUl>
        </CustMenuDiv>
    );
};

export default CustomerMenu;