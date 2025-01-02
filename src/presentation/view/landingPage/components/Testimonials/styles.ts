'use client'

import styled from "styled-components";
import Image from "next/image";


export const IconChat = styled(Image)`
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.4rem;
`

export const TestimonialsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
    width: 60%;
    margin-left: 18rem;
`

export const SectionLeft = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
    margin-right: -10rem;
`

export const SectionRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

export const ParagraphTestimonial = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
    width: 62%;
    margin-bottom: 1.1rem;
`

export const SectionUser = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`

export const SectionTextUser = styled.div`
    display: flex;
    flex-direction: column;
`

export const NameUser = styled.span`
    font-size: 1.4rem;
    font-weight: 700;
`

export const RoleUser = styled.span``