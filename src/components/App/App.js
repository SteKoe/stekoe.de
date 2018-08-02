import React, { Component } from 'react';
import Background from "./components/Background/Background";

import './App.css';
import VCard from "./components/VCard/VCard";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Background/>
          <VCard/>
          <Footer/>
      </div>
    );
  }
}

export default App;
