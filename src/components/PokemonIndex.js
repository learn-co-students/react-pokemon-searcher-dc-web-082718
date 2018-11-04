import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import Adapter from './Adapter'
const adapter = new Adapter();

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemons: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    adapter.fetchAllPokemon().then(this.addPokemonsToState)
  }

  addPokemonsToState = (pokemonData) => {
    this.setState({
      pokemons: this.pokemonParser(pokemonData)
    })
    return this.state.pokemons
  }

  pokemonParser(data) {
    const oldPokemon = data.filter(mon => mon.userAdded === undefined)
    const newPokemon = data.filter(mon => mon.userAdded === true)
    const parsedNewPokemon = newPokemon.map(function(mon) {
      return ({
        "name": mon.name,
        "stats": [{},{},{},{},{},{"name": "hp", "value": mon.hp}],
        "sprites": {
          "front": mon.frontUrl,
          "back": mon.backUrl
        },
        "id": mon.id}
      )
    })

    return oldPokemon.concat(parsedNewPokemon)

  }

  handleSearch = (e, {value}) => {
    this.setState({searchTerm: value})
  }

  getSpecificPokemons(substring) {
    if(substring === '') {
      return []
    } else if(substring === 'all'){
      return this.state.pokemons
    } else {
      return this.state.pokemons.filter(mon => mon.name.includes(substring))
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.getSpecificPokemons(this.state.searchTerm)} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
