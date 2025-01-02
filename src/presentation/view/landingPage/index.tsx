'use client'
import { ButtonAction, ButtonInfo, FeaturesList, HeaderLanding, PrincipalTitle, SecondaryTitle, SubTitle, Testimonials } from "./components"
import { ImageExample, LandingContainer, MainContainer, StyledText } from "./styles"
import Img from "@/assets/dash.svg"




export const LandingPage = () => {
    return(
        <LandingContainer>
            <HeaderLanding/>
            <MainContainer>
                <ButtonInfo marginTop="7rem">7 Day Free Trial - No Credit card required</ButtonInfo>
                <PrincipalTitle>Unlock the <StyledText fontSize="4rem" color="#6DACE7">Power</StyledText> of Data</PrincipalTitle>
                <SubTitle width="17%">Turn Data into Actionable Insights with Our SaaS Dashboard</SubTitle>
                <ButtonAction/>
                <ImageExample src={Img} alt=""/>
                <ButtonInfo marginTop="7rem">Features</ButtonInfo>
                <SecondaryTitle>Real-Time Insights, <StyledText fontSize="3rem" color="#AA7AEB">Real-Time Results</StyledText></SecondaryTitle>
                <SubTitle width="25%"> Saas dashboard that enable users to perform various tasks and activities related to their business</SubTitle>
                <FeaturesList/>
                <Testimonials/>
            </MainContainer>
            
        </LandingContainer>
    )
}