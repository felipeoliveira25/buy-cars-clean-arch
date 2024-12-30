'use client'
import { ButtonSignUp, HeaderContainer, HeaderList, HeaderLogo, ListLinkItem, ListLinks, } from "./styles"
import { useRouter } from "next/navigation"

export const HeaderLanding = () => {
    const router = useRouter();
    return(
        <HeaderContainer>
            <HeaderLogo onClick={() => router.push("/")}>Horizon</HeaderLogo>
            <HeaderList>
                <ListLinks>
                        <ListLinkItem href="/pricing">Pricing</ListLinkItem>
                        <ListLinkItem href="/faqs">FAQs</ListLinkItem>
                        <ListLinkItem href="/support">Support</ListLinkItem>
                        <ListLinkItem href="/login">Sign In</ListLinkItem>
                </ListLinks>
                <ButtonSignUp onClick={() => router.push("/register")}>Sign Up</ButtonSignUp>
            </HeaderList>
        </HeaderContainer>
    )
}