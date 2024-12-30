import { ReactNode } from "react"
import { SubTitleContainer, SubTitleText } from "./styles"

interface SubTitleProps {
    children: ReactNode;
    width?: string;
}

export const SubTitle = ({children, width}: SubTitleProps) => {
    return(
        <SubTitleContainer width={width}>
            <SubTitleText>
                {children}
            </SubTitleText>
        </SubTitleContainer>
    )
}