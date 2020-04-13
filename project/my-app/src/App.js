import React from 'react';
import Contacts from "./components/Contacts/index.js";
import Profile from "./components/Profile/index.js";
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Contacts />
        <Profile />
      </div>
    );
  }
}

export default App;