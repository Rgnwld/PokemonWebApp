import styled from 'styled-components';

export const Body_Component = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;

export const Sections = styled.div`
    display: flex;

    background-color: #d4c3a3;
    flex-direction: column;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

    box-shadow: 0px 0px 8px rgba(0, 0, 0, 10%);
`;

export const CardGrid = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem 4rem;
    padding: 3rem;
    background-color: #d4c3a3;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TypeSelectionContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    padding: 1rem;
    border-bottom: solid 1px gray;
`;

export const Selector = styled.select`
    display: flex;
    padding: 0.5rem;
`;

export const CarrosselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;
    padding: 1rem;

    & > div {
        margin: 2rem 1rem;
    }
`;

export const PageBottomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: #100b16 2px solid;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

    border-radius: 100rem;
    height: 3rem;
    width: 3rem;
    background: #524153;
`;

export const TopPageCounterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 2rem;
    margin-right: 2rem;
    margin-left: 2rem;
`;

export const TopPageCounterItem = styled.div<{ currentActive?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    padding: 0.1rem;
    margin: 0.1rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    border-radius: 20%;
    background-color: ${({ currentActive = false }) => {
        if (currentActive) return '#535662';
        else return '#7E7394';
    }};

    color: white;
    border: #100b16 1px solid;
    cursor: pointer;
`;

export const TopPageCounterButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;

    margin: 0.1rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    border-radius: 20%;
    background-color: #b4adbe;

    color: white;
    border: #100b16 1px solid;
    cursor: pointer;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
`;

export const BottomPageCounterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-family: 'Poppins', sans-serif;
    /* margin-bottom: 2rem;
    margin-right: 2rem; */
`;

export const BottomPageCounterItem = styled.div<{ currentActive?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    padding: 0.1rem;
    margin: 0.1rem;
    min-width: 0.5rem;
    min-height: 0.5rem;
    border-radius: 100rem;
    background-color: ${({ currentActive = false }) => {
        if (currentActive) return '#535662';
        else return '#7E7394';
    }};

    color: white;
    border: #100b16 1px solid;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
`;
