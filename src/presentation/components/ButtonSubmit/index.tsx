import { ReactNode } from "react"
import { ButtonContainer } from "./styles"

interface ButtonSubmitProps {
    children: ReactNode
}
export const ButtonSubmit = ({children}: ButtonSubmitProps) => {
    return(
        <ButtonContainer type="submit">{children}</ButtonContainer>
    )
}