import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import {authenticated as auth} from './api';

import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';

const GlobalStyle = createGlobalStyle`


  body, h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 150px 24px 24px 24px;
`;

const App = () => {
  const home = () => (!auth() ? <Redirect to="/" /> : <Home />);
  const login = () => (auth() ? <Redirect to="/home" /> : <Login />);
  const register = () => (auth() ? <Redirect to="/home" /> : <Register />);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Main>
        <Switch>
          <Route path="/home" render={home} />
          <Route path="/register" render={register} />
          <Route path="/" render={login} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
};

export default App;
