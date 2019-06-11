import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon : [
      { id: 4,    name: 'Charmander', type: 'fire',     exp: 62   },
      { id: 7,    name: 'Squirtle',   type: 'water',    exp: 63   },
      { id: 11,   name: 'Metapod',    type: 'bug',      exp: 72   },
      { id: 12,   name: 'Butterfree', type: 'flying',   exp: 178  },
      { id: 25,   name: 'Pikachu',    type: 'electric', exp: 112  },
      { id: 39,   name: 'Jigglypuff', type: 'normal',   exp: 95   },
      { id: 94,   name: 'Gengar',     type: 'poison',   exp: 225  },
      { id: 133,  name: 'Eevee',      type: 'normal',   exp: 65   }
    ]
  };
  render() {
    let playerX = [];
    let playerY = [ ...this.props.pokemon ];
    while (playerX.length < playerY.length) {
      let randIdx = Math.floor(Math.random() * playerY.length);
      let randPokemon = playerY.splice(randIdx, 1)[0];
      playerX.push(randPokemon);
    }
    let expX = playerX.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    let expY = playerY.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    return (
      <div>
        <Pokedex pokemon={playerX} exp={expX} isWinner={expX > expY} />
        <Pokedex pokemon={playerY} exp={expY} isWinner={expY > expX} />
      </div>
    )
  }
}

export default Pokegame;