import Image from "next/image"
import { StyledText } from "../../styles"
import { ButtonInfo } from "../ButtonInfo"
import { SecondaryTitle } from "../SecondaryTitle"
import { SubTitle } from "../SubTitle"
import { IconChat, NameUser, ParagraphTestimonial, RoleUser, SectionLeft, SectionRight, SectionTextUser, SectionUser, TestimonialsContainer } from "./styles"
import imgUser from "@/assets/user-testimonial.png"
import imgChat from "@/assets/ico-chat.svg"

export const Testimonials = () => {
    return(
        <TestimonialsContainer>
            <SectionLeft>
                <ButtonInfo>Testimonials</ButtonInfo>
                <SecondaryTitle textAlign="start" width="70%">What <StyledText fontSize="3rem" color="#AA7AEB">customer</StyledText> say about us</SecondaryTitle>
                <SubTitle width="46%" textAlign="start"> Saas dashboard that enable users to perform various tasks and activities related to their business</SubTitle>
            </SectionLeft>
            <SectionRight>
                <IconChat src={imgChat} alt=""/>
                <ParagraphTestimonial>Our business was in chaos before we started using this Saas dashboard. We were drowning in data and couldnt make sense of it. Thanks to this amazing tool, we now have clarity, and our decision-making has become precise and data-driven.
                </ParagraphTestimonial>
                <SectionUser>
                    <Image src={imgUser} width={80} height={80} alt=""/>
                    <SectionTextUser>
                        <NameUser>Sarah Johnson</NameUser>
                        <RoleUser>Marketing Manager</RoleUser>
                    </SectionTextUser>
                </SectionUser>
                
            </SectionRight>
        </TestimonialsContainer>
    )
}