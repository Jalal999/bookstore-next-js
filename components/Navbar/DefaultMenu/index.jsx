import { DefaultMenuDiv, DefaultMenuUl, DefaultMenuLink } from "./DefaultMenuStyle";
import Link from "next/link";

const DefaultMenu = (onClick) => {

    const handleClick = () => {
        onClick();
    }

    return (

        <DefaultMenuDiv>
            <DefaultMenuUl>
                <DefaultMenuLink><Link href="/"><a onClick={handleClick}>home</a></Link></DefaultMenuLink>
                <DefaultMenuLink><Link href="/login"><a onClick={handleClick}>login</a></Link></DefaultMenuLink>
                <DefaultMenuLink><Link href="/signup"><a onClick={handleClick}>sign up</a></Link></DefaultMenuLink>
            </DefaultMenuUl>
        </DefaultMenuDiv>

    );

};

export default DefaultMenu;