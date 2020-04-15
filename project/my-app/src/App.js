import React from 'react';
import Contacts from "./components/Contacts/index.js";
import Profile from "./components/Profile/index.js";
//import "./App.css";
//import logo from './logo.svg';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Profile />
        <Contacts />
      </div>
    );
  }
}

export default App;