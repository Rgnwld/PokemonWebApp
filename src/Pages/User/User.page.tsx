import React, { useEffect, useState } from 'react';
import Footer from 'components/Footer/Footer.compoent';
import Header from 'components/Header/Header.component';
import { Body_Component, Sections } from '../PokemonSelector/PokemonSelector.styles';
import {
    ButtonContainer,
    Img_PIC,
    InfoTemplate,
    ListContainer,
    Name_PIC,
    PIC,
    PokedexContainer,
    PokedexTitle,
    Types_PIC,
} from './User.styles';
import { HoverButtonIMG, HoverButton, TypeContainer } from '../../components/PokemonCard/PokemonCard.styles';
import olhoIcon from 'UI/olho.png';
import plusIcon from 'UI/plus.png';
import Modal_Component, { openModal } from '../../components/Modal/Modal.component';
import { apiController } from '../../Utils/utils';
import { AxiosResponse } from 'axios';

const UserPage: React.FC = () => {
    const username = localStorage.getItem('user');
    const [pokemonsId, setPokemonsId] = useState([]);
    const [pokemonArr, setPokemonArr] = useState<any[]>([]);
    const [userSearch, setUserSearch] = useState<string>('');

    async function LoadPokemons() {
        let pokeArr: any[] = [];
        Promise.all(pokemonsId.map(async (e) => await apiController.get('/pokemon/' + e)))
            .then((e: any) => {
                pokeArr = e?.map((e: any) => e?.data);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setPokemonArr([...pokeArr]);
            });
    }

    function OnStart() {
        const pokeArr = localStorage.getItem('pokeIds');
        let aux: any = pokeArr?.split(',');
        aux?.pop();
        setPokemonsId(aux);
    }

    useEffect(() => {
        OnStart();
    }, []);

    useEffect(() => {
        LoadPokemons();
    }, [pokemonsId]);

    return (
        <>
            <Modal_Component />
            <Header
                onChangeSearchValue={(evt) => {
                    setUserSearch(evt?.target?.value ?? '');
                }}
                searchValue={userSearch}
            />
            <Body_Component>
                <Sections>
                    <PokedexContainer>
                        <PokedexTitle>Pokedex de {username}</PokedexTitle>
                        <ListContainer>
                            <InfoTemplate>
                                <span>Foto</span>
                                <span>Nome</span>
                                <span>Tipo</span>
                                <span style={{ justifyContent: 'center' }}>Ação</span>
                            </InfoTemplate>
                            {pokemonArr?.map((e) => {
                                if (e?.name?.toLowerCase().includes(userSearch?.toLowerCase()))
                                    return (
                                        <PIC>
                                            <Img_PIC
                                                src={
                                                    e?.sprites?.front_default ??
                                                    e?.sprites?.other['official-artwork'].front_default
                                                }
                                            />
                                            <Name_PIC>{e?.name}</Name_PIC>
                                            <Types_PIC>
                                                {e?.types.map((e: any) => {
                                                    return (
                                                        <TypeContainer composition="2">{e?.type.name}</TypeContainer>
                                                    );
                                                })}
                                            </Types_PIC>
                                            <ButtonContainer>
                                                <HoverButton onClick={() => openModal(e)} customColor="#49DBDF">
                                                    <HoverButtonIMG src={olhoIcon} />
                                                </HoverButton>
                                                <HoverButton
                                                    onClick={() => {
                                                        if (window.confirm('Você deseja soltar este pokemon|?')) {
                                                            let pokeIds = localStorage.getItem('pokeIds') ?? '';
                                                            const pokeArr = localStorage.getItem('pokeIds');

                                                            let aux: string[] | undefined = pokeArr?.split(',');

                                                            let index: number = aux?.indexOf(e?.id.toString())!;
                                                            if (index >= 0) {
                                                                aux?.splice(index, 1);
                                                            }
                                                            console.log(aux);
                                                            let pokeString: string = aux?.join(',') ?? '';
                                                            console.log(pokeString);
                                                            localStorage.setItem('pokeIds', pokeString);
                                                            OnStart();
                                                        }
                                                    }}
                                                    customColor=" #f25d52"
                                                >
                                                    <HoverButtonIMG
                                                        style={{ transform: 'rotate(45deg)' }}
                                                        src={plusIcon}
                                                    />
                                                </HoverButton>
                                            </ButtonContainer>
                                        </PIC>
                                    );
                            })}
                        </ListContainer>
                    </PokedexContainer>
                </Sections>
            </Body_Component>
            <Footer />
        </>
    );
};

export default UserPage;
