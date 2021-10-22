import React from 'react';
import { Header, CustomIMG, HeaderContainer, SearchBar, LoginButton, UserButton } from './Header.styles';

import pokemonLogo from 'UI/pokemon-logo.png';
import competiLogo from 'UI/competi-logo.png';

const Header_Component: React.FC<{
    onChangeSearchValue?: (onChange?: React.ChangeEvent<HTMLInputElement>) => void;
    searchValue?: string;
}> = ({ onChangeSearchValue, searchValue }) => {
    return (
        <Header>
            <HeaderContainer>
                <a href="/">
                    <CustomIMG src={pokemonLogo} alt="pokemonlogo" />
                </a>
            </HeaderContainer>
            <HeaderContainer>
                <SearchBar
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    type="text"
                    placeholder="Search Pokémon"
                ></SearchBar>
            </HeaderContainer>
            <HeaderContainer>
                {localStorage.getItem('user') ? (
                    <UserButton href="/user">{localStorage.getItem('user')}</UserButton>
                ) : (
                    <LoginButton href="/login">Login</LoginButton>
                )}
            </HeaderContainer>
            <HeaderContainer>
                <CustomIMG src={competiLogo} alt="competiLogo" />
            </HeaderContainer>
        </Header>
    );
};

export default Header_Component;
