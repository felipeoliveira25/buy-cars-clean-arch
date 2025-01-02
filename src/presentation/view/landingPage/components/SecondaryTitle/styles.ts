'use client'
import styled from "styled-components";

interface SecondaryTitleProps {
    width?: string;
    textAlign?: string;
}

export const SecondaryTitleContainer = styled.div<SecondaryTitleProps>`
    width: ${({width}) => width || "25%"};
    display: flex;
    text-align: ${({textAlign}) => textAlign || "center"};
    margin-top: 1.5rem;
`
export const StyledWord = styled.h2`
    font-size: 3rem;
    font-weight: 900;
    line-height: 1;
`