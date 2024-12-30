'use client'
import styled from "styled-components";

interface IInput {
    hasError?: boolean;
}

export const InputContainer = styled.input<IInput>`
    outline: none;
    border: 1px solid #D6D6D6;
    border-radius: 9px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 1rem;
    width: 22rem;
    border-color: ${({ hasError }) => hasError ? '#c21919' : 'D6D6D6'} ;
`