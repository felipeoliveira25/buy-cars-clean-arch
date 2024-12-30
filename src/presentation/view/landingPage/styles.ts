'use client'
import styled from "styled-components";
import Image from "next/image";

interface StyledTextProps {
    color?: string;
    fontSize?: string;
}

export const LandingContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const StyledText = styled.span<StyledTextProps>`
    color: ${({color}) => color};
    
    font-size: ${({fontSize}) => fontSize};
    font-weight: 900;
`

export const ImageExample = styled(Image)`
    margin-top: 3rem;
`