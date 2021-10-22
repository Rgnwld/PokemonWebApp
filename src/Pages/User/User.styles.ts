import styled from 'styled-components';

export const PokedexContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
`;

export const PokedexTitle = styled.span`
    display: flex;
    font-size: 1rem;
    border-bottom: 1px solid #0f0f0f;
    margin: 1rem 0;
    padding: 1rem;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 60vh;
    width: 50vw;
`;

export const InfoTemplate = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 4fr 1fr;
    font-size: 0.8rem;
    gap: 1rem;
    padding: 0 0.25rem;
    margin: 0 0.5rem;
    span {
        display: flex;
        /* justify-content: center; */
        /* border: solid 1px red; */
    }
`;

//Pokemon info card
export const PIC = styled.div`
    display: grid;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background-color: white;
    grid-template-columns: 1fr 3fr 4fr 1fr;
    padding: 0.25rem;
    margin: 0.5rem;
    border-radius: 4px;
`;

export const Img_PIC = styled.img`
    display: flex;
    border: solid 2px #0f0f0f;
    border-radius: 4px;
    height: 5rem;
`;

export const Name_PIC = styled.span`
    display: flex;
    font-size: 0.9rem;
`;

export const Types_PIC = styled.div`
    display: flex;
    font-size: 0.7rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    /* transform: scale(60%); */
`;
