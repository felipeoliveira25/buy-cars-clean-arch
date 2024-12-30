'use client'
import Image from "next/image";
import styled from "styled-components";


export const CardFeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    background-color: #FFFFFF;
    border-radius: 15px;
    border: none;
    width: 17rem;
    height: 18rem;
    padding: 0 1rem;
    cursor: pointer;

    &:hover{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
`

export const CardFeatureImage = styled(Image)``
export const CardFeatureTitle = styled.span`
    font-weight: 900;
    font-size: 1.1rem;
`
export const CardFeatureDescription = styled.p`
    font-size: 0.9rem;
    margin-top: -2rem;
`