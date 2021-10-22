import styled from 'styled-components';

export const Modal_BG = styled.div<{ close: boolean }>`
    display: ${({ close }) => (close ? 'none' : 'flex')};
    position: absolute;

    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;

    background-color: rgba(0, 0, 0, 25%);
    z-index: 100;
    font-family: 'Poppins', sans-serif;
`;

export const ModalWindow = styled.div`
    display: flex;
    position: absolute;

    justify-content: center;
    align-items: center;

    min-height: 20rem;
    width: 20rem;

    background-color: #e0d7ec;
    z-index: 101;
    border-radius: 16px;
    border: solid 2px black;
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;
`;

export const CloseModalButton = styled.div`
    display: flex;
    position: absolute;
    height: 2.5rem;
    width: 2.5rem;
    background-color: #f25d52;
    border-radius: 100%;
    top: -2.5rem;
    right: -1.5rem;
    cursor: pointer;
    border: solid 2px black;
`;

export const Name_Container = styled.div`
    margin: 1rem;
    text-transform: capitalize;
`;
export const IMG_Container = styled.img`
    height: 10rem;
    background-color: white;
    border-radius: 4px;
    border: solid 2px black;
`;
export const TypeGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    background-color: #7e7394;
    padding: 1rem;
    border-radius: 4px;
`;
