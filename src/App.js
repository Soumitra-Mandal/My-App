import React from 'react';
import './App.css';
//import {useState} from 'react';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  
  changeColor = () => {
    if(this.state.favoritecolor==='red')
    this.setState({favoritecolor: "blue"});
    else
    this.setState({favoritecolor: "red"});


  }
  render() {
    return (
      <div>
      <h1><span>My Favorite Color is {this.state.favoritecolor}</span></h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
