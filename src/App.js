import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header';
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'
import { GlobalStyle } from './style.js';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
          </div>
        </BrowserRouter>
        <GlobalStyle />
      </div>
    );
  }
}

export default App;