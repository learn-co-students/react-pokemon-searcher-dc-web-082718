import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false
    }
  }
  handleClick = () =>{

    this.state.clicked?this.setState({clicked:false}):this.setState({clicked:true})
  }


  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" onClick = {this.handleClick} src = {this.state.clicked?this.props.backImage:this.props.frontImage}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
