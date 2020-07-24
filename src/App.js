import React from 'react';
import './App.css';
import {useState} from 'react';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import { connect } from 'react-redux';

function Counter(){
    const [count,setCounter] = useState(Math.floor(Math.random()*1000));
  
  function increment(){
    setCounter(count+1);
  }
  function decrement(){
    setCounter(count-1);
  }
  function multiply() {
    if((count*2)>=1000){
      setCounter(1000);
    }
    else if(count*2<=-1000){
      setCounter(-1000);
    }
    else setCounter(count*2);
    
  }
  function reset() {
    setCounter(0);
  }

    return <div><h1>{count}</h1>
    <button onClick = {increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={multiply}>Double</button>
    <button onClick={reset}>reset</button>
    </div>;
  }


function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
