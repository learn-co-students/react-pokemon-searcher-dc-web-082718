import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemonCards()}

      </Card.Group>
    )
  }

  renderPokemonCards(){
    return this.props.pokemon.map((pokemon, index )=>{

      return <PokemonCard key = {index}
      name = {pokemon.name}
      backImage ={pokemon.sprites.back}
      frontImage = {pokemon.sprites.front}
      hp = {pokemon.stats[pokemon.stats.length-1].value}/>
    })
  }
}

export default PokemonCollection
