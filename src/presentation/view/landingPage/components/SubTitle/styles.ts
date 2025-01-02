'use client'
import styled from "styled-components";

interface SubTitleProps {
    width?: string;
    textAlign?: string;
}

export const SubTitleContainer = styled.div<SubTitleProps>`
    text-align: ${({textAlign}) => textAlign || "center"};
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