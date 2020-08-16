import React from 'react';
import './App.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
//import { useEffect, useState } from 'react';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import { connect } from 'react-redux';


var interval='';
class Automate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: 0, isstopped:true };
  }


 resetTimer= () => {
  this.setState({time:0});
}

startTimer=()=>{
  if(this.state.isstopped===true){
    interval = setInterval(()=>{   
      this.setState({time: this.state.time + 1});        
},1000);
  }
  else{
    clearInterval(interval);
  }
this.setState({isstopped:!this.state.isstopped});

}

  render() {
    return (
      <div>
      <h1 id="head">{this.state.time}s</h1>
      <button className="stop" onClick ={this.startTimer}>{this.state.isstopped ? 'START' : 'STOP'}</button>
      <button className="reset" onClick={this.resetTimer}>RESET</button>
    </div>
    );
  }
}





function App() {
  return (
    <div className="App">
      <Automate/>
    </div>
  );
}


export default App;

