import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;

    justify-content: center;
    align-items: center;

    background-color: #b4adbe;
    border: #100b16 2px solid;
    border-radius: 4px;

    color: white;
    height: fit-content;
    width: fit-content;
    min-height: 10rem;
    min-width: 10rem;

    font-family: 'Poppins', sans-serif;

    transform: scale(90%);
`;

export const TypeContainer = styled.div<{ composition?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    ${({ composition }) => {
        switch (composition) {
            case '2':
                return css``;
            case '1':
                return css`
                    position: absolute;
                    bottom: 0.5rem;
                `;

            default:
                return css`
                    position: absolute;
                    top: -0.75rem;
                    right: 0.5rem;
                `;
        }
    }}

    padding: 0.25rem 1rem;
    font-size: 12px;
    font-weight: 300;

    border-radius: 4px;
    z-index: 3;

    background-color: ${({ children }) => {
        switch (children) {
            case 'fire':
                return '#F25D52';

            case 'electric':
                return '#F6BD20';

            case 'grass':
                return '#78c850';

            case 'water':
                return '#6890f0';

            case 'bug':
                return '#a8b820';

            case 'normal':
                return '#a8a878';

            case 'poison':
                return '#a040a0';

            case 'ground':
                return '#e0c068';

            case 'fairy':
                return '#ee99ac';

            case 'fighting':
                return '#c03028';

            case 'psychic':
                return '#f85888';

            case 'rock':
                return '#b8a038';

            case 'ghost':
                return '#705898';

            case 'ice':
                return '#98d8d8';

            case 'dragon':
                return '#7038f8';

            default:
                return '#040404';
        }
    }};
`;

export const IdContainer = styled.div<{ composition?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: red;
    padding: 0.5rem;
    height: 1rem;
    width: 1rem;
    z-index: 3;

    ${({ composition }) => {
        switch (composition) {
            case '1':
                return css`
                    top: -1rem;
                `;
            default:
                return css`
                    top: -0.75rem;
                    left: -0.75rem;
                `;
        }
    }}

    background-color: #535662;
    border: #100b16 2px solid;
    border-radius: 12px;

    transform: rotate(45deg);

    & > * {
        transform: rotate(-45deg);
    }
`;

export const NameContainer = styled.div<{ composition?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 5rem;

    background-color: #7e7394;
    border: #100b16 2px solid;
    position: absolute;
    border-radius: 12px;

    font-size: 0.8rem;
    font-weight: 300;
    padding: 0.5rem 1rem;

    text-transform: capitalize;
    z-index: 2;

    ${({ composition }) => {
        switch (composition) {
            case '1':
                return css`
                    bottom: -1.5rem;
                `;
            default:
                return css`
                    bottom: -1rem;
                `;
        }
    }}
`;

export const PokemonIMG = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;

    margin: 0;
`;

export const HoverContainerIMG = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;

    opacity: 0;

    &:hover {
        background-color: rgba(0, 0, 0, 20%);
        opacity: 1;
    }
`;

export const HoverButton = styled.button<{ customColor?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 5rem;
    margin: 4px;

    cursor: pointer;
    border: #100b16 2px solid;
    border: none;
    background-color: ${({ customColor = 'white' }) => customColor};
`;

export const HoverButtonIMG = styled.img`
    height: 1.1rem;
`;
