'use client'
import { useState } from "react";
import { ButtonAction, ButtonInfo, CardPricing, FeaturesList, HeaderLanding, PrincipalTitle, SecondaryTitle, SubTitle, Testimonials } from "./components"
import { ContainerPrices, ImageExample, LandingContainer, MainContainer, SectionToggle, StyledText } from "./styles"
import Img from "@/assets/dash.svg"
import Switch from "react-switch";


export const LandingPage = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked) => {
      setChecked(nextChecked);
    };

    const itensPricing = [
        {
            title: "Starter",
            price: "$29",
            itens: [
                "Data Visualization", "Real-Time Analytics", "Customization"
            ],
            info: "Small businesses and startups looking to gain data insights"
        },
        {
            title: "Business",
            price: "$79",
            itens: [
                "All Basic Plan Features", "Integrations", "Advanced Reporting"
            ],
            info: "Growing businesses that need comprehensive data management and teamwork features"
        },
        {
            title: "Enterprise",
            price: "$149",
            itens: [
                "All Pro Plan Features", "Full Access to API", "Dedicated Support"
            ],
            info: "Larger enterprises requiring advanced data solutions and personalized support."
        }
    ]
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
                <SecondaryTitle width="25%">Real-Time Insights, <StyledText fontSize="3rem" color="#AA7AEB">Real-Time Results</StyledText></SecondaryTitle>
                <SubTitle width="25%"> Saas dashboard that enable users to perform various tasks and activities related to their business</SubTitle>
                <FeaturesList/>
                <Testimonials/>
                <ButtonInfo marginTop="7rem">Plans & Features</ButtonInfo>
                <SecondaryTitle width="">Pricing</SecondaryTitle>
                <SectionToggle>
                    <span>Monthly</span>
                    <Switch
                        onChange={handleChange}
                        checked={checked}
                        className="react-switch"
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onColor="#fff"
                        offColor="#fff"
                        onHandleColor="#000"
                        offHandleColor="#000"
                    />
                    <span>Year</span>
                </SectionToggle>
                <ContainerPrices>
                    {itensPricing.map((item) => (
                        <CardPricing
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            itens={item.itens}
                            infoText={item.info}
                        />
                    ))}
                </ContainerPrices>
                
            </MainContainer>
            
        </LandingContainer>
    )
}