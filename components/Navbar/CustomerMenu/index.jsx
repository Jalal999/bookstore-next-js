import { CustMenuDiv, CustMenuUl, CustMenuLink } from "./CustomerMenuStyle";
import { signOut } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_FAILURE } from "../../../redux/userSlice";
import Link from "next/link";

const CustomerMenu = ({ onClick }) => {
    const userState = useSelector((state) => state.user);
    console.log(userState.user)
    const userID = userState.user.id;

    const dispatch = useDispatch();

    const handleClick = () => {
        onClick();
    }

    return (
        <CustMenuDiv>
            <CustMenuUl>
                <CustMenuLink><Link href="/"><a onClick={handleClick}>home</a></Link></CustMenuLink>
                <CustMenuLink><Link href="/cart"><a onClick={handleClick}>cart</a></Link></CustMenuLink>
                <CustMenuLink><Link href={`/user/${userID}`}><a onClick={handleClick}>my profile</a></Link></CustMenuLink>
                <CustMenuLink><Link href={`/user/${userID}/orders`}><a onClick={handleClick}>my orders</a></Link></CustMenuLink>
                <CustMenuLink>
                    <Link href="">
                        <a onClick={() => signOut({
                                redirect: true
                            }).then(result =>
                            dispatch(LOGIN_FAILURE()))}>
                            logout
                        </a>
                    </Link>
                </CustMenuLink>
            </CustMenuUl>
        </CustMenuDiv>
    );
};

export default CustomerMenu;