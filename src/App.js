import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends Component {
  state = { cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const changed = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: changed,
    }, () => this.validation());
  };

  validation = () => {
    const {
      cardName,
      cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const valCardName = (cardName[0] !== undefined && cardName[0] !== ' ');
    const valDesc = (cardDescription[0] !== undefined && cardDescription[0] !== ' ');
    const valImg = (cardImage[0] !== undefined && cardImage[0] !== ' ');
    const minAttr = 0;
    const maxAttr = 90;
    const valAttr1 = (Number(cardAttr1) >= minAttr) && (Number(cardAttr1) <= maxAttr);
    const valAttr2 = (Number(cardAttr2) >= minAttr) && (Number(cardAttr2) <= maxAttr);
    const valAttr3 = (Number(cardAttr3) >= minAttr) && (Number(cardAttr3) <= maxAttr);
    const max = 210;
    const sum = (Number(cardAttr1)
    + Number(cardAttr2) + Number(cardAttr3)) <= max;
    if (valCardName && valDesc && valImg && sum && valAttr1 && valAttr2 && valAttr3) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onSaveButtonClick = () => {
    this.setState((old) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
      cards: [...old.cards,
        { cardName: old.cardName,
          cardDescription: old.cardDescription,
          cardImage: old.cardImage,
          cardRare: old.cardRare,
          cardAttr1: old.cardAttr1,
          cardAttr2: old.cardAttr2,
          cardAttr3: old.cardAttr3,
          cardTrunfo: old.cardTrunfo,
        }],
    }));
    this.valTrunfo();
  };

  valTrunfo = () => {
    const { cardTrunfo, hasTrunfo } = this.state;
    if (cardTrunfo && !hasTrunfo) this.setState({ hasTrunfo: true });
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
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cards } = this.state;
    return (
      <div className="container">
        <div className="header">
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          state={ state }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
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
        <div className="cards">
          { cards.map((card, index) => (
            <div key={ index }>
              <Card
                cardName={ card.cardName }
                cardImage={ card.cardImage }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            </div>))}
        </div>
      </div>
    );
  }
}

export default App;
