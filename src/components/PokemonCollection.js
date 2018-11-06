import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {



  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Cards go here</h1>

        {this.props.allPokemon.map(pokemonObj => {
          return <PokemonCard key={pokemonObj.id} pokemon={pokemonObj}  />;
        })}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
