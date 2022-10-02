import React from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/people">
          <Main/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
