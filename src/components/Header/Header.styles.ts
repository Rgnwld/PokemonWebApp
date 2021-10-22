import styled from 'styled-components';

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr 1fr;
    justify-content: center;
    align-items: center;

    background-color: #524153;
    color: white;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.25rem 1rem;
`;

export const CustomIMG = styled.img`
    display: flex;
    height: 2.5rem;
    padding: 0.25rem;
`;

export const SearchBar = styled.input`
    display: flex;
    width: 100%;
    box-sizing: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 4px;
    border: none;
    outline: none;
`;

export const LoginButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7e7394;
    color: white;

    text-decoration: none;

    padding: 0.25rem 0.5rem;
    width: 100%;
    border: #100b16 2px solid;
    border-radius: 8px;
`;

export const UserButton = styled.a`
    color: white;
    text-decoration: none;
`;
