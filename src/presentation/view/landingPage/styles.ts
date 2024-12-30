'use client'
import styled from "styled-components";

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
    margin-top: 7rem;
`

export const StyledText = styled.span`
    color: ${({color}) => color};
    font-size: 4rem;
    font-weight: 900;
`