'use client'
import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 7rem;
    display: flex;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    justify-content: space-around;
    align-items: center;
`

export const HeaderLogo = styled.h3`
    font-weight: 800;
    font-size: 1.4rem;
    text-shadow: 5px 1px 2px rgba(0, 0, 0, 0.1);
`

export const HeaderList = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`

export const ListLinks = styled.div`
    gap: 2rem;
    display: flex;
`

export const ListLinkItem = styled(Link)`
    text-decoration: none;
    color: #000000;
    font-weight: 700;

`

export const ButtonSignUp = styled.button`
    background-color: #212227;
    color: #FFFFFF;
    border: none;
    border-radius: 47px;
    padding: 0.8rem;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color:rgb(57, 57, 58);
    }
`