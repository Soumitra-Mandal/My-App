import React from 'react';
import './App.css';
//import {useState} from 'react';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {background:this.props.choice,shadow:"none",};
  }
  colorswitch=()=>{
    var sh = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px '+this.props.choice+', 0 0 40px '+this.props.choice+', 0 0 50px '+this.props.choice+', 0 0 60px '+this.props.choice+', 0 0 70px '+this.props.choice;
    if(this.state.background===this.props.choice)
    this.setState({background:"white",shadow:sh});
    else
    this.setState({background:this.props.choice,shadow:'none'});


  }
 
  render() {
    var mystyle={
      backgroundColor:this.state.background,
      boxShadow:this.state.shadow
    };
    return (
      <>
      <div className ='light' style={mystyle}>
      </div>
     <button id="bn" onClick={this.colorswitch}>Switch {this.props.choice}</button>
     </>
    );
  }
}


function App() {
  return (
    <div className="App">
      <Header choice='red'/>
      <Header choice='green'/>
      <Header choice='blue'/>
      <Header choice='yellow'/>
      <Header choice='magenta'/>
      <Header choice='cyan'/>
      <Header choice='aquamarine'/>
    </div>
  );
}

export default App;
