import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;

    justify-content: center;
    align-items: center;
`;

export const LoginWindow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30rem;
    width: 30rem;

    background-color: red;
    border-radius: 1000rem;
    border: solid 4px black;
    overflow: hidden;

    box-shadow: 0px 0px 16px rgba(0, 0, 0, 25%);
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: red;
    height: 50%;
    width: 100%;
    box-sizing: border-box;
    border-bottom: solid 2px black;
`;

export const LogoImg = styled.img`
    height: 6rem;
`;

export const BottomContainer = styled.div`
    display: flex;
    padding: 2rem;
    align-items: center;
    flex-direction: column;
    background-color: white;
    height: 50%;
    width: 100%;
    box-sizing: border-box;
    border-top: solid 2px black;
    font-family: 'Poppins', sans-serif;
`;

export const EnterButton = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;

    &:hover {
        &::after {
            content: '';
            position: absolute;
            height: 1.5rem;
            width: 1.5rem;
            border: solid 1px black;
            background-color: red;
            border-radius: 100rem;
            cursor: pointer;
        }
    }

    &::after {
        content: '';
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        border: solid 1px black;
        background-color: white;
        border-radius: 100rem;
    }

    &::before {
        content: '';
        position: absolute;
        height: 2rem;
        width: 2rem;
        border: solid 1px black;
        background-color: black;
        border-radius: 100rem;
    }
`;

export const LoginInput = styled.input`
    display: flex;
    border-radius: 4px;
    padding: 0.25rem;
    border: solid 1px black;
    font-size: 1.1rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`;
