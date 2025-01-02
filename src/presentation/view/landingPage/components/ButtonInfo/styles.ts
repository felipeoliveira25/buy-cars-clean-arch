import styled from "styled-components";

interface ButtonInfoProps {
    marginTop?: string;
}

export const ButtonInfoContainer = styled.div<ButtonInfoProps>`
    background-color: #D3D3D3;
    padding: 0.3rem 0.5rem;
    border-radius: 30px;
    margin-top: ${({marginTop}) => marginTop};
    width: fit-content;
    
`;

export const ButtonInfoText = styled.span`
    font-size: 0.9rem;
    font-weight: 500;
`