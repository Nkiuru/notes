import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

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
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Main>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Main>
    </BrowserRouter>
  );
};

export default App;
