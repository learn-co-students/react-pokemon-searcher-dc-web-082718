import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


const API = 'http://localhost:3000/pokemon';

class PokemonPage extends React.Component {

    constructor(){
        super();
        this.state = {
            pokemons: [],
            searchTerm: ''
        }
    }



  componentDidMount(){

      //callback hell yay
      fetch(API)
      .then(resp => resp.json())
      .then(pokemons => {

          // deep copy is technically better but since first fetch dnm
          this.setState(
              {
                  pokemons: pokemons.map(poke => {
                      poke.isClicked = false;
                      return poke;
                   })
               })


      })

  }



    flipImage = (pokemon) => {
        console.log("flip card")
        const mons = this.state.pokemons
        const index = mons.indexOf(pokemon);
        this.setState({
            pokemons: [
                ...mons.slice(0,index),
                {...pokemon, isClicked: !pokemon.isClicked},
                 ...mons.slice(index+1)]
        })

    }

  handleSearch = (event, { value }) => {
      this.setState({searchTerm: value})
  }

  addPokemon = pokemon => {
     this.setState({ pokemons: [...this.state.pokemons, pokemon] })
   }

  render() {

      const searched = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchTerm));

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch , 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={searched} flipImage={this.flipImage}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
