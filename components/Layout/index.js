import Navbar from "../Navbar"
import Meta from "../Meta"
import { useEffect } from "react"
import { getSession } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from "../../redux/userSlice";


const Layout = ({ children }) => {
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(async () => {
        const authenticated = userState.user.authenticated;
        if(!authenticated) {
            console.log("layout: ", authenticated)
            dispatch(LOGIN_REQUEST)
            const session = await getSession();
            if(session) {
                dispatch(LOGIN_SUCCESS(session.user))
            } else {
                dispatch(LOGIN_FAILURE(session))
            }
        }
    }, [])
    return (
        <>
            <Meta />
            <Navbar />
            <div style={{marginTop: "80px"}}>
                {children}
            </div>
        </>
    )
}

export default Layout