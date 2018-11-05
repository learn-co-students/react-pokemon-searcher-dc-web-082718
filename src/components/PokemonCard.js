import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
      // debugger;
        const poke = this.props.pokemon;

        let src;
        if(poke.isClicked){
            src = poke.sprites.back
        }
        else{
            src = poke.sprites.front
        }


    return (
      <Card>
        <div>
          <div className="image" onClick={() => {this.props.flipImage(poke)}}>
            <img src={src} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {poke.stats.find(stat => stat.name === 'hp').value}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
