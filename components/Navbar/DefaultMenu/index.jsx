import { DefaultMenuDiv, DefaultMenuUl, DefaultMenuLink } from "./DefaultMenuStyle";
import Link from "next/link";

const DefaultMenu = () => {
    
    return (
        <DefaultMenuDiv>
            <DefaultMenuUl>
                <DefaultMenuLink><Link href="/">home</Link></DefaultMenuLink>
                <DefaultMenuLink><Link href="/login">login</Link></DefaultMenuLink>
                <DefaultMenuLink><Link href="/signup">sign up</Link></DefaultMenuLink>
            </DefaultMenuUl>
        </DefaultMenuDiv>
    );

};

export default DefaultMenu;