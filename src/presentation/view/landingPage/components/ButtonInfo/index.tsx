import { ReactNode } from "react"
import { ButtonInfoContainer, ButtonInfoText } from "./styles"

interface ButtonInfoProp {
    children: ReactNode
}

export const ButtonInfo = ({children} :ButtonInfoProp) => {
    return(
        <ButtonInfoContainer>
            <ButtonInfoText>
                {children}
            </ButtonInfoText>
        </ButtonInfoContainer>
    )
}