import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.PureComponent {
  constructor(){
    super()
    this.state = {
      flipped: false
    }
  }

  handleClick = (event) => {
    console.log("Clicked it");

    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    return (
      <Card onClick={this.handleClick} >
        <div>
          <div className="image">
            <img src={this.props.pokemon.sprites.front}alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
