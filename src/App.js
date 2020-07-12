import React from 'react';
import './App.css';

function Welcome(props){
  return <h1>Welcome {props.name}</h1>
}


function Goodbye(p){
return <h1>Goodbye {p.name}</h1>
}

const me = <Goodbye name = 'Mandal' />
const el  = <Welcome name = 'Soumitra' />
function App() {
  return (
    <div className="App">
    {el}
    {me}
    </div>
  );
}

export default App;





