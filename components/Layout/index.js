import Navbar from "../Navbar"
import Meta from "../Meta"

const Layout = ({ children }) => {
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