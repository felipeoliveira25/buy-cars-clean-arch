import { ReactNode } from "react"
import { StyledWord, TitleContainer } from "./styles"

interface PrincipalTitleProps {
    children: ReactNode
}

export const PrincipalTitle = ({children}: PrincipalTitleProps) => {
    return(
        <TitleContainer>
            <StyledWord>
                {children}
            </StyledWord>
        </TitleContainer>
    )
}