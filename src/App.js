import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends Component {
  state = { cardName: '',
    // cardDescription: '',
    // cardAttr1: '0',
    // cardAttr2: '0',
    // cardAttr3: '0',
    // cardImage: '',
    // cardRare: 'normal',
    // cardTrunfo: false,
    // hasTrunfo: false,
    // isSaveButtonDisabled: true,
    // cards: [],
    // filterName: '',
    // filterTrunfo: false,
    // rareFilter: 'todas',
  };

  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const changed = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: changed,
    });
    // this.validation();
  };

  render() {
    const { ...state } = this.state;
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.state;
    // const { filterName, filterTrunfo, rareFilter } = this.state;
    return (
      <div className="container">
        <div className="header">
          <h1>Tryunfo</h1>
        </div>
        <Form state={ state } onInputChange={ this.onInputChange } />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
