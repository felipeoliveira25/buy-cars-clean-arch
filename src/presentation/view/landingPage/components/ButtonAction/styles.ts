import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ButtonActionContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#000000;
    padding: 0.8rem 2rem;
    border-radius: 30px;
    border: none;
    gap: 0.5rem;
`

export const ButtonActionText = styled.span`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 0.9rem;
`

export const ButtonActionIcon = styled(HiArrowNarrowRight)`
    color: #FFFFFF;
`