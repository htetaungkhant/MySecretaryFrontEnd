import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import AddTransaction from './components/add-transaction/AddTransaction';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact><AddTransaction /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
