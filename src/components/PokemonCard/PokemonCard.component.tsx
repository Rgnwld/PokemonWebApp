import React, { useEffect, useState } from 'react';
import { apiController } from '../../Utils/utils';
import {
    Container,
    HoverButton,
    HoverButtonIMG,
    HoverContainerIMG,
    IdContainer,
    NameContainer,
    PokemonIMG,
    TypeContainer,
} from './PokemonCard.styles';

import olhoIcon from 'UI/olho.png';
import plusIcon from 'UI/plus.png';
import { openModal } from '../Modal/Modal.component';

const PokemonCard: React.FC<{ pokemon: string; composition?: string }> = ({ pokemon, composition = '0' }) => {
    const [pokeCard, setPokeCard] = useState<any>();

    async function LoadCard() {
        setPokeCard(undefined);
        try {
            if (pokemon == undefined) {
                setPokeCard(undefined);
                return;
            }

            const { data } = await apiController.get(`/pokemon/${pokemon}`);
            setPokeCard(data);
        } catch (e) {
            setTimeout(() => LoadCard(), 1000);
            setPokeCard(undefined);
        }
    }

    useEffect(() => {
        LoadCard();
    }, [pokemon]);

    if (pokeCard != undefined)
        return (
            <Container>
                <HoverContainerIMG>
                    <HoverButton onClick={() => openModal(pokeCard)} customColor="#49DBDF">
                        <HoverButtonIMG src={olhoIcon} />
                    </HoverButton>
                    <HoverButton
                        onClick={() => {
                            if (localStorage.getItem('user') != undefined && localStorage.getItem('user') != null) {
                                if (window.confirm('Você deseja capturar este pokemon?')) {
                                    let pokeIds = localStorage.getItem('pokeIds') ?? '';
                                    let pokeArr = pokeIds + pokeCard?.id + ',';
                                    localStorage.setItem('pokeIds', pokeArr);
                                    alert('Você capturou um ' + pokeCard?.name);
                                }
                            } else {
                                alert('Você precisa estar logado para executar esta ação!');
                            }
                        }}
                        customColor="#3AA05B"
                    >
                        <HoverButtonIMG src={plusIcon} />
                    </HoverButton>
                </HoverContainerIMG>
                <PokemonIMG
                    src={pokeCard?.sprites?.front_default ?? pokeCard?.sprites?.other['official-artwork'].front_default}
                    alt="pokemon"
                />
                <TypeContainer composition={composition}>{pokeCard?.types[0]?.type?.name}</TypeContainer>
                <IdContainer composition={composition}>
                    <span>{pokeCard?.id}</span>
                </IdContainer>
                <NameContainer composition={composition}>{pokeCard?.name}</NameContainer>
            </Container>
        );
    else return <Container>Sem Pokemon</Container>;
};

export default PokemonCard;
