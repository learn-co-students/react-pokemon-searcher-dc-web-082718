import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: [],
      filter: ""
    }
  }
  filterPokemon = (e) => {
    this.setState({
      filter: e.target.value
    })
  }
  render() {

    console.log(this)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.filterPokemon} showNoResults={false} />
        <br />
        <PokemonCollection pokemon = {this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.filter))} />
        <br />
        <PokemonForm handleSubmit = {this.handleFormSubmit} />
      </div>
    )
  }
  handleFormSubmit = (e) =>{
    e.preventDefault()
    let pokemon = {
    "name":e.target.name.value,
    "stats": [
      {
        "value":e.target.hp.value,
        "name" : "hp"
      }
    ],
    "sprites": {
      "front": e.target.backUrl.value,
      "back": e.target.frontUrl.value
    }
    }
    fetch("http://localhost:3000/pokemon",{
          method: "POST",
          headers:
            {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
          body: JSON.stringify(pokemon)
        }
      ).then(response => response.json())
      .then((pokemon)=>{
        this.state.pokemon.push(pokemon)
        this.setState({pokemon: this.state.pokemon})
      })

  }
  componentWillMount(){
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(data => this.setState({pokemon:data}))
  }
}

export default PokemonPage
