import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h1>Tryunfo</h1>
        </div>
        <Form />
      </>
    );
  }
}

export default App;
