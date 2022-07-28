import { CustMenuDiv, CustMenuUl, CustMenuLink } from "./CustomerMenuStyle";
import { signOut } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_FAILURE } from "../../../redux/userSlice";

const CustomerMenu = () => {
    const userState = useSelector((state) => state.user);
    console.log(userState.user)
    const userID = userState.user.id;

    const dispatch = useDispatch();

    return (
        <CustMenuDiv>
            <CustMenuUl>
                <CustMenuLink><a href="/">home</a></CustMenuLink>
                <CustMenuLink><a href="/cart">cart</a></CustMenuLink>
                <CustMenuLink><a href={`/user/${userID}`}>my profile</a></CustMenuLink>
                <CustMenuLink><a href={`/user/${userID}/orders`}>my orders</a></CustMenuLink>
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