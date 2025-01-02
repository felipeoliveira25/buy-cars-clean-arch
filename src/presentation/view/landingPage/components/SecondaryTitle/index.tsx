import { ReactNode } from "react"
import { StyledWord, SecondaryTitleContainer } from "./styles"

interface SecondaryTitleProps {
    children: ReactNode;
    width?: string;
    textAlign?: string;
}

export const SecondaryTitle = ({children, width, textAlign}: SecondaryTitleProps) => {
    return(
        <SecondaryTitleContainer width={width} textAlign={textAlign}>
            <StyledWord>
                {children}
            </StyledWord>
        </SecondaryTitleContainer>
    )
}