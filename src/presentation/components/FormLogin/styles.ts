import Link from "next/link";
import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    gap: 1.5rem;
    background-color: #FFFFFF;
    border-radius: 15px;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 3rem;
`

export const ContainerTitles= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 20rem;
    margin-bottom: 1.5rem;
`

export const TitleForm = styled.h2``
export const SubTitleForm = styled.h3`
    font-weight: 400;
`
export const TextForgotPassword = styled(Link)`
    color: #333333;
    text-decoration: none;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
`

export const ContainerTextToRegister = styled.div`
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextRedirectToRegister = styled(Link)`
    color: #333333;
    font-weight: 700;
    text-decoration: none;
`