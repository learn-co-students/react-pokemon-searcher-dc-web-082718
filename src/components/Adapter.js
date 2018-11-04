const POKEURL = 'http://localhost:3000/pokemon'

export default class Adapter {

  genericFetch(url, options) {
    return fetch(url, options).then(res => res.json())
  }

  fetchAllPokemon() {
    return this.genericFetch(POKEURL)
  }

  postPokemon(pokemon) {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pokemon)
    }
    return this.genericFetch(POKEURL, options)
  }

}
