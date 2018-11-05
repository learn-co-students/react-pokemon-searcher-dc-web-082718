import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      searchInput: "",
      pokemonList: []
    }
  }


  componentDidMount(){
    this.fetchAndRenderAllPokemon()
  }

  fetchAndRenderAllPokemon = () => {
    return fetch(`http://localhost:3000/pokemon`)
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          pokemonList: pokemons
        })
      })
  }

  handleSearchChange = (event, data) => {
      this.setState(
        {searchInput: data.value},
        this.filterPokemonSearch)
  }

  filterPokemonSearch = () => {
    //use this.state.searchInput to filter this.state.pokemonList
    if(this.state.searchInput === ""){
      this.fetchAndRenderAllPokemon()
    } else {
      let filteredPokemonList = this.state.pokemonList.filter(pokemon => pokemon.name.includes(this.state.searchInput.toLowerCase()))

      this.setState({
        pokemonList: filteredPokemonList
      })
    }

  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonList={this.state.pokemonList} />
        <br />
        <PokemonForm fetchAndRenderAllPokemon={this.fetchAndRenderAllPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
