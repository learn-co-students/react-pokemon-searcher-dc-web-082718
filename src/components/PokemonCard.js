import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      sprite: "front"
    }
  }

  handleSprite = () => {
    this.state.sprite === "front" ? this.setState({sprite: "back"}) : this.setState({sprite: "front"})
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.props.pokemon.sprites[this.state.sprite]} alt={this.props.pokemon.name} onClick={this.handleSprite} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
