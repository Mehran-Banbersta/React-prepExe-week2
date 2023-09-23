import React from 'react';
import PersonController from './components/PersonController';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Person Generator</h1>
      </header>
      <main>
        <PersonController />
      </main>
    </div>
  );
}

export default App;
