import React, { useEffect, useState } from 'react';
import Footer_Component from 'components/Footer/Footer.compoent';
import Header_Component from 'components/Header/Header.component';
import PokemonCard from 'components/PokemonCard/PokemonCard.component';
import { apiController } from 'Utils/utils';
import {
    Body_Component,
    CardContainer,
    CardGrid,
    TypeSelectionContainer,
    Sections,
    Selector,
    CarrosselContainer,
    PageBottomButton,
    TopPageCounterItem,
    TopPageCounterContainer,
    TopPageCounterButton,
    BottomPageCounterItem,
    BottomPageCounterContainer,
} from './PokemonSelector.styles';
import Modal from 'components/Modal/Modal.component';

interface IPokemon {
    pokemon: { name: string };
}

const PokemonSelector: React.FC = () => {
    const [types, setTypes] = useState<{ name: string }[]>([]);
    const [selectedType, setSelectedType] = useState('fire');
    const [searchValue, setSearchValue] = useState<string>('');
    const [pokemonsToShow, setPokemonsToShow] = useState<IPokemon[]>([]);
    const [pokemonsToShowDown, setPokemonsToShowDown] = useState<number[]>([]);
    const [pageTop, setPageTop] = useState<number>(0);
    const [pageBottom, setPageBottom] = useState<number>(0);

    async function LoadTypes() {
        try {
            const { data } = await apiController.get<{ results: { name: string }[] }>(`/type`);
            setTypes(data?.results);
        } catch (e) {
            console.log(e);
        }
    }

    async function LoadWithParams(name: string, type: string) {
        const { data } = await apiController.get<{ pokemon: IPokemon[] }>(`/type/${type}`);
        let aux = data?.pokemon.filter((e) => e.pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));
        setPageTop(0);

        if (searchValue != '') setPokemonsToShow(aux);
        else setPokemonsToShow(data?.pokemon);
    }

    useEffect(() => {
        LoadTypes();

        let aux: number[] = [];
        for (let i = 0; i <= 15; i++) {
            aux.push(Math.floor(Math.random() * 20 + 1));
        }

        setPokemonsToShowDown(aux);
    }, []);

    useEffect(() => {
        LoadWithParams(searchValue, selectedType);
    }, [selectedType, searchValue]);

    const TopPageCounter: React.FC = () => {
        let value = pokemonsToShow.length / 6;
        let isFloat = value % 1 !== 0;
        let max = Math.floor(value);
        let aux = [];

        for (let i = 0; i <= (isFloat ? max : max - 1); i++) {
            aux.push(
                <TopPageCounterItem
                    key={i + Date.now()}
                    onClick={() => {
                        setPageTop(i);
                    }}
                    currentActive={i == pageTop}
                >
                    {i + 1}
                </TopPageCounterItem>
            );
        }
        return <>{aux}</>;
    };

    const BottomPageCounter: React.FC = () => {
        let max = Math.floor(pokemonsToShowDown.length / 5);
        let aux = [];
        for (let i = 0; i < max; i++) {
            aux.push(
                <BottomPageCounterItem
                    key={i + Date.now()}
                    onClick={() => {
                        setPageBottom(i);
                    }}
                    currentActive={i == pageBottom}
                ></BottomPageCounterItem>
            );
        }
        return <>{aux}</>;
    };

    return (
        <>
            <Modal />
            <Header_Component
                searchValue={searchValue}
                onChangeSearchValue={(evt) => {
                    setSearchValue(evt?.target.value ?? '');
                }}
            />

            <Body_Component>
                <Sections>
                    <TypeSelectionContainer>
                        <Selector onChange={(evt) => setSelectedType(evt.target.value)} value={selectedType}>
                            {types?.map((props) => (
                                <option key={props.name}>{props?.name}</option>
                            ))}
                        </Selector>
                    </TypeSelectionContainer>
                    <CardGrid>
                        <CardContainer>
                            <PokemonCard pokemon={pokemonsToShow[0 + 6 * pageTop]?.pokemon.name} />
                        </CardContainer>
                        <CardContainer>
                            <PokemonCard pokemon={pokemonsToShow[1 + 6 * pageTop]?.pokemon.name} />
                        </CardContainer>
                        <CardContainer>
                            <PokemonCard pokemon={pokemonsToShow[2 + 6 * pageTop]?.pokemon.name} />
                        </CardContainer>
                        <CardContainer>
                            <PokemonCard pokemon={pokemonsToShow[3 + 6 * pageTop]?.pokemon.name} />
                        </CardContainer>
                        <CardContainer>
                            <PokemonCard pokemon={pokemonsToShow[4 + 6 * pageTop]?.pokemon.name} />
                        </CardContainer>
                        <CardContainer>
                            <PokemonCard pokemon={pokemonsToShow[5 + 6 * pageTop]?.pokemon.name} />
                        </CardContainer>
                    </CardGrid>
                    <TopPageCounterContainer>
                        <TopPageCounterButton
                            onClick={() => {
                                let aux = Math.floor(pokemonsToShow.length / 6);
                                if (pageTop <= 0) {
                                    setPageTop(aux);
                                } else {
                                    setPageTop(pageTop - 1);
                                }
                            }}
                        >
                            {'<'}
                        </TopPageCounterButton>
                        <TopPageCounter />
                        <TopPageCounterButton
                            onClick={() => {
                                let aux = Math.floor(pokemonsToShow.length / 6);
                                if (pageTop > aux - 1) {
                                    setPageTop(0);
                                } else setPageTop(pageTop + 1);
                            }}
                        >
                            {'>'}
                        </TopPageCounterButton>
                    </TopPageCounterContainer>
                </Sections>
                <CarrosselContainer>
                    <PageBottomButton
                        onClick={() => {
                            let aux = Math.floor(pokemonsToShowDown.length / 6);
                            if (pageBottom <= 0) {
                                setPageBottom(aux);
                            } else {
                                setPageBottom(pageBottom - 1);
                            }
                        }}
                    >
                        {'<'}
                    </PageBottomButton>
                    <CardContainer>
                        <PokemonCard pokemon={pokemonsToShowDown[0 + 5 * pageBottom]?.toString()} composition={'1'} />
                    </CardContainer>
                    <CardContainer>
                        <PokemonCard pokemon={pokemonsToShowDown[1 + 5 * pageBottom]?.toString()} composition={'1'} />
                    </CardContainer>
                    <CardContainer>
                        <PokemonCard pokemon={pokemonsToShowDown[2 + 5 * pageBottom]?.toString()} composition={'1'} />
                    </CardContainer>
                    <CardContainer>
                        <PokemonCard pokemon={pokemonsToShowDown[3 + 5 * pageBottom]?.toString()} composition={'1'} />
                    </CardContainer>
                    <CardContainer>
                        <PokemonCard pokemon={pokemonsToShowDown[4 + 5 * pageBottom]?.toString()} composition={'1'} />
                    </CardContainer>
                    <PageBottomButton
                        onClick={() => {
                            let aux = Math.floor(pokemonsToShowDown.length / 6);
                            if (pageBottom > aux - 1) {
                                setPageBottom(0);
                            } else setPageBottom(pageBottom + 1);
                        }}
                    >
                        {'>'}
                    </PageBottomButton>
                </CarrosselContainer>
                <BottomPageCounterContainer>
                    <BottomPageCounter />
                </BottomPageCounterContainer>
            </Body_Component>
            <Footer_Component />
        </>
    );
};

export default PokemonSelector;
