import { ReactNode } from "react"
import { StyledWord, SecondaryTitleContainer } from "./styles"

interface SecondaryTitleProps {
    children: ReactNode
}

export const SecondaryTitle = ({children}: SecondaryTitleProps) => {
    return(
        <SecondaryTitleContainer>
            <StyledWord>
                {children}
            </StyledWord>
        </SecondaryTitleContainer>
    )
}