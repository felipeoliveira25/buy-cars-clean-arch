import { ReactNode } from "react"
import { SubTitleContainer, SubTitleText } from "./styles"

interface SubTitleProps {
    children: ReactNode
}

export const SubTitle = ({children}: SubTitleProps) => {
    return(
        <SubTitleContainer>
            <SubTitleText>
                {children}
            </SubTitleText>
        </SubTitleContainer>
    )
}