import { DefaultMenuDiv, DefaultMenuUl, DefaultMenuLink } from "./DefaultMenuStyle";

const DefaultMenu = () => {
    
    return (
        <DefaultMenuDiv>
            <DefaultMenuUl>
                <DefaultMenuLink><a href="/">home</a></DefaultMenuLink>
                <DefaultMenuLink><a href="/login">login</a></DefaultMenuLink>
                <DefaultMenuLink><a href="/signup">sign up</a></DefaultMenuLink>
            </DefaultMenuUl>
        </DefaultMenuDiv>
    );

};

export default DefaultMenu;