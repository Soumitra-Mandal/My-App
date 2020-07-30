import React from 'react';
import './App.css';
//import {useState} from 'react';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red", color:"red"};
  }
  
  componentDidMount = () => {
    setInterval(()=>{
      if(this.state.favoritecolor==='red')
    this.setState({favoritecolor: "blue", color:'blue'});
    else
    this.setState({favoritecolor: "red", color:'red'});
    },1000);

  }
  render() {
    return (
      <div>
      <h1 style={{color: this.state.color}}><span>My Favorite Color is {this.state.favoritecolor}</span></h1>
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
