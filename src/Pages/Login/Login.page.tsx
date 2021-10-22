import React, { useState } from 'react';
import pokeIcon from 'UI/pokemon-logo.png';

import {
    BottomContainer,
    Container,
    EnterButton,
    LoginInput,
    LoginWindow,
    LogoImg,
    TopContainer,
} from './Login.styles';

const Login: React.FC = () => {
    const [login, setLogin] = useState('');

    return (
        <>
            <Container>
                <LoginWindow>
                    <TopContainer>
                        <LogoImg src={pokeIcon} alt="" />
                    </TopContainer>
                    <EnterButton
                        onClick={(e) => {
                            if (login != '') {
                                localStorage.setItem('user', login);
                                window.location.href = '/';
                            } else {
                                alert('O seu nome não pode estar vazio!');
                            }
                        }}
                    />
                    <BottomContainer>
                        Digite o seu nome
                        <LoginInput
                            onChange={(evt) => {
                                setLogin(evt.target.value);
                            }}
                            value={login}
                            type="text"
                        />
                        Aperte no centro da Pokebola para se acessar!
                    </BottomContainer>
                </LoginWindow>
            </Container>
        </>
    );
};

export default Login;
