import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

class App extends Component {
  // state = { cardName: '',
  //   cardDescription: '',
  //   cardAttr1: '0',
  //   cardAttr2: '0',
  //   cardAttr3: '0',
  //   cardImage: '',
  //   cardRare: 'normal',
  //   cardTrunfo: false,
  //   hasTrunfo: false,
  //   isSaveButtonDisabled: true,
  //   cards: [],
  //   filterName: '',
  //   filterTrunfo: false,
  //   rareFilter: 'todas',
  // };

  render() {
    // const { filterName, filterTrunfo, rareFilter } = this.state;
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
