import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div className="form">
        <fieldset className="inputArea">
          <label htmlFor="cardName">
            Nome da carta
            <input
              type="text"
              data-testid="name-input"
              id="cardName"
              name="cardName"
              value={ cardName }
              maxLength="40"
              placeholder="Sylvanas Windrunner"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição da carta
            <textarea
              data-testid="description-input"
              id="cardDescription"
              name="cardDescription"
              value={ cardDescription }
              maxLength="1000"
              onChange={ onInputChange }
              placeholder="Lady Sylvanas Windrunner, formerly styled 'the Dark Lady' a..."
            />
          </label>
          <label htmlFor="cardAttr1">
            Primeiro atributo
            <input
              type="number"
              data-testid="attr1-input"
              id="cardAttr1"
              name="cardAttr1"
              value={ cardAttr1 }
              max={ 90 }
              min="0"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            Segundo atributo
            <input
              type="number"
              data-testid="attr2-input"
              id="cardAttr2"
              name="cardAttr2"
              value={ cardAttr2 }
              max="90"
              min="0"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3">
            Terceiro atributo
            <input
              type="number"
              data-testid="attr3-input"
              id="cardAttr3"
              name="cardAttr3"
              value={ cardAttr3 }
              max="90"
              min="0"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="cardImage"
              name="cardImage"
              value={ cardImage }
              placeholder="https://blz-contentstack-images.akamaized.net/screenshot_titan.jpg"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            Raridade
            <select
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              data-testid="rare-input"
              onChange={ onInputChange }
            >
              <option key="normal">normal</option>
              <option key="raro">raro</option>
              <option key="muito raro">muito raro</option>
            </select>
          </label>
          { hasTrunfo === false
            ? (
              <label htmlFor="cardTrunfo">
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  id="cardTrunfo"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trunfo
              </label>)
            : <p> Você já tem um Super Trunfo em seu baralho </p> }
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </fieldset>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
