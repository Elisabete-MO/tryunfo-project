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
      // hasTrunfo,
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
              placeholder="Garrosh Hellscream"
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
              placeholder="Invited by Thrall to join the Horde after the reopening o..."
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
              maxLength="40"
              placeholder="Garrosh Hellscream"
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
              maxLength="40"
              placeholder="Garrosh Hellscream"
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
              maxLength="40"
              placeholder="Garrosh Hellscream"
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
              maxLength="40"
              placeholder="Garrosh Hellscream"
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
          </label>
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
