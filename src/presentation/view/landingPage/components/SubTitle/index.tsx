import { ReactNode } from "react"
import { SubTitleContainer, SubTitleText } from "./styles"

interface SubTitleProps {
    children: ReactNode;
    width?: string;
    textAlign?: string;
}

export const SubTitle = ({children, width, textAlign}: SubTitleProps) => {
    return(
        <SubTitleContainer width={width} textAlign={textAlign}>
            <SubTitleText>
                {children}
            </SubTitleText>
        </SubTitleContainer>
    )
}