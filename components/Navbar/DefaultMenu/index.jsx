import { DefaultMenuDiv, DefaultMenuUl, DefaultMenuLink } from "./DefaultMenuStyle";
import Link from "next/link";

const DefaultMenu = () => {
    
    return (
        <DefaultMenuDiv>
            <DefaultMenuUl>
                <DefaultMenuLink><Link href="/" passHref>home</Link></DefaultMenuLink>
                <DefaultMenuLink><Link href="/login" passHref>login</Link></DefaultMenuLink>
                <DefaultMenuLink><Link href="/signup" passHref>sign up</Link></DefaultMenuLink>
            </DefaultMenuUl>
        </DefaultMenuDiv>
    );

};

export default DefaultMenu;