import { ReactNode } from "react"
import { TextErrorContainer } from "./styles"

interface TextErrorProps {
    children: ReactNode
}

export const TextError = ({children}: TextErrorProps) => {
    return(
        <TextErrorContainer>{children}</TextErrorContainer>
    )
}