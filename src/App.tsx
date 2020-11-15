import React from 'react';
import './App.css';
import Card from './components/Card'
import Column from './components/Column'
import {AppContainer} from './styles'


function App() {
  return (
    <div className="App">
      <AppContainer>
        <Column text="To Do">
          <Card text="Pray" />
        </Column>
        <Column text="In Progress">
          <Card text="Pray" />
        </Column>
        <Column text="Done">
          <Card text="Pray" />
        </Column>
      </AppContainer>
    </div>
  );
}

export default App;
