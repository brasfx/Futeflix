import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import PageNotFound from './pages/Error404/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
