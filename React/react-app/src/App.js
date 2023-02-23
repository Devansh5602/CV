import React from 'react';
import './App.css';
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps';

function App() {
  return (
    <div>
      <ClassProps name="Learner 1" place="Patan">
        <p>Greetings</p>
      </ClassProps>
      <ClassProps name="Learner 1" place="Patan">
        <button>Click</button>
      </ClassProps>
      <ClassProps name="Learner 1" place="Patan">

      </ClassProps>
      <FunctionProps name="Learner 1" place="Patan" />
    </div>
  );
}

export default App;
