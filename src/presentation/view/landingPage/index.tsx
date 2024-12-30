'use client'
import { ButtonInfo, HeaderLanding, PrincipalTitle, SubTitle } from "./components"
import { LandingContainer, MainContainer, StyledText } from "./styles"


export const LandingPage = () => {
    return(
        <LandingContainer>
            <HeaderLanding/>
            <MainContainer>
                <ButtonInfo>7 Day Free Trial - No Credit card required</ButtonInfo>
                <PrincipalTitle>Unlock the <StyledText color="#6DACE7">Power</StyledText> of Data</PrincipalTitle>
                <SubTitle>Turn Data into Actionable Insights with Our SaaS Dashboard</SubTitle>
            </MainContainer>
            
        </LandingContainer>
    )
}