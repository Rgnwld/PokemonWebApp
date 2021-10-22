import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login.page';
import PokemonSelector from './Pages/PokemonSelector/PokemonSelector.page';
import UserPage from './Pages/User/User.page';

function App() {
    return (
        <div id="app">
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/user">
                        <UserPage />
                    </Route>
                    <Route path="/">
                        <PokemonSelector />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
