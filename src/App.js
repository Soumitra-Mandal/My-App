import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';


// Action creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num }
}
function decrementCounter(num){
  return {type:'DECREMENT' , num:num}
}
const initialState = {
  count: 0
};
// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    case 'DECREMENT':
      return {count: state.count - action.num};
    default:
      return state;
  }
}
function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
  function handleClick2(){
    props.decrementCounter(1);
  }

    return <div>
    <p>{props.count}</p>
    <button onClick={handleClick}>Increment</button>
    <button onClick={handleClick2}>Decrement</button>
    </div>;
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}

const store = createStore(reducer);

const Counters = connect(mapStateToProps,mapDispatchToProps)(Counter);

const el = <Provider store={store}>
          <Counters/>
        </Provider>;

function App() {
  return (
    <div className="App">
      {el}
    </div>
  );
}

export default App;
