import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';

const el = 
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
;
function App() {
  return (
    <div className="App">
      {el}
    </div>
  );
}

export default App;
