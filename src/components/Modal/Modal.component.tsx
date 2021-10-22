import React, { useEffect, useState } from 'react';
import { TypeContainer } from '../PokemonCard/PokemonCard.styles';

import {
    Modal_BG,
    ModalWindow,
    CloseModalButton,
    ModalContainer,
    Name_Container,
    TypeGrid,
    IMG_Container,
} from './Modal.styles';

const Modal_Component: React.FC = (props) => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<any>({});

    const close = () => {
        setModalState(false);
    };
    const open = (args?: any) => {
        setModalState(true);
        console.log(args?.detail);
        setPokemon(args?.detail);
    };

    useEffect(() => {
        document.addEventListener('openModal', open);
        document.addEventListener('closeModal', close);

        return () => {
            document.removeEventListener('openModal', open);
            document.removeEventListener('closeModal', close);
        };
    });

    useEffect(() => {
        console.log(modalState);
    }, [modalState]);

    return (
        <Modal_BG close={!modalState}>
            <ModalWindow>
                <ModalContainer>
                    <CloseModalButton onClick={() => closeModal()} />
                    <IMG_Container src={pokemon?.sprites?.other['official-artwork'].front_default} />
                    <Name_Container>{pokemon?.name}</Name_Container>
                    <TypeGrid>
                        {pokemon?.types?.map((e: any) => (
                            <TypeContainer composition="2">{e?.type.name}</TypeContainer>
                        ))}
                    </TypeGrid>
                </ModalContainer>
            </ModalWindow>
        </Modal_BG>
    );
};

export function openModal(args?: any) {
    document.dispatchEvent(
        new CustomEvent('openModal', {
            detail: {
                ...args,
            },
        })
    );
}
export function closeModal() {
    document.dispatchEvent(new CustomEvent('closeModal'));
}

export default Modal_Component;
