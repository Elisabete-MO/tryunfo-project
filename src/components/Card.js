import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <fieldset className="visualization">
          <h3 data-testid="name-card" id="cardName" name="cardName">
            Carta
            {' '}
            { cardName }
          </h3>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            id="cardImage"
            name="cardImage"
          />
          <label htmlFor="cardDescription">
            Descrição
            <textarea
              data-testid="description-card"
              id="cardDescription"
              name="cardDescription"
              value={ cardDescription }
              maxLength="1000"
              placeholder="Lady Sylvanas Windrunner, formerly styled 'the Dark Lady' a..."
            />
          </label>
          <p data-testid="attr1-card" id="cardAttr1" name="cardAttr1">
            Primeiro atributo
            {' '}
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card" id="cardAttr2" name="cardAttr2">
            Segundo atributo
            {' '}
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card" id="cardAttr3" name="cardAttr3">
            Terceiro atributo
            {' '}
            { cardAttr3 }
          </p>
          <p data-testid="rare-card" id="cardRare" name="cardRare">
            { cardRare }
          </p>
          {
            cardTrunfo === true
              ? <p data-testid="trunfo-card" name="cardTrunfo"> Super Trunfo </p>
              : <p id="" />
          }
        </fieldset>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
