import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <fieldset>
          <label htmlFor="carta">
            Nome da Carta
            <input
              type="text"
              data-testid="name-input"
              id="carta"
              name="carta"
              // value={ nome }
              maxLength="40"
              placeholder="Garrosh Hellscream"
              // onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="desc">
            Descrição da carta
            <textarea
              data-testid="description-input"
              id="resumo"
              name="resumo"
              // value={ endereco }
              maxLength="1000"
              placeholder="Invited by Thrall to join the Horde after the reopening o..."
              // onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="attr1">
            Primeiro atributo
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1"
              name="attr1"
              // value={ nome }
              maxLength="40"
              placeholder="Garrosh Hellscream"
              // onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="attr2">
            Segundo atributo
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2"
              name="attr2"
              // value={ nome }
              maxLength="40"
              placeholder="Garrosh Hellscream"
              // onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="attr3">
            Terceiro atributo
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3"
              name="attr3"
              // value={ nome }
              maxLength="40"
              placeholder="Garrosh Hellscream"
              // onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="image"
              name="image"
              // value={ nome }
              maxLength="40"
              placeholder="Garrosh Hellscream"
              // onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select name="rarity" id="rarity" data-testid="rare-input">
              <option key="normal">normal</option>
              <option key="raro">raro</option>
              <option key="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="check">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="check"
              name="check"
              // value={ nome }
              maxLength="40"
              placeholder="Garrosh Hellscream"
              // onChange={ this.handleChange }
            />
            Super Trunfo
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </fieldset>
      </div>
    );
  }
}

export default Form;
