import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(data => {
      this.setState({
        allPokemon: data
      })
    })
  }

  handleSearch = (event) => {
    event.persist();

    this.setState({
      searchTerm: event.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
