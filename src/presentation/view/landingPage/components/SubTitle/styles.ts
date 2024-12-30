import styled from "styled-components";

interface SubTitleProps {
    width?: string;
}

export const SubTitleContainer = styled.div<SubTitleProps>`
    text-align: center;
    width: ${({width}) => width};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.8rem;
    margin-bottom: 1.8rem;
`

export const SubTitleText = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
`