import React from 'react'
import { Form } from 'semantic-ui-react'
import Adapter from './Adapter'
const adapter = new Adapter()

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '',
      userAdded: true
    }
  }

  handleSubmit = () => {
    adapter.postPokemon(this.state)
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.onChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.onChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.onChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.onChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
