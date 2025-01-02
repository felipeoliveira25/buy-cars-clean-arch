import { ReactNode } from "react"
import { ButtonInfoContainer, ButtonInfoText } from "./styles"

interface ButtonInfoProp {
    children: ReactNode;
    marginTop?: string;
}

export const ButtonInfo = ({children, marginTop} :ButtonInfoProp) => {
    return(
        <ButtonInfoContainer marginTop={marginTop}>
            <ButtonInfoText>
                {children}
            </ButtonInfoText>
        </ButtonInfoContainer>
    )
}