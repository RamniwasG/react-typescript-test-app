import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/test/Test';
import ClockTest from './components/clocktest/ClockTest';
import ComponentWithDefaultProps from './components/componentwithdefaultprops/ComponentWithDefaultProps';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent title="My Card" paragraph="Develop Branch Component" />
        <ClockTest />
        <ComponentWithDefaultProps />
      </header>
    </div>
  );
}

export default App;
