import './App.css';

import React, { Component } from 'react';

import Button from './components/button';
import Membre from './components/Membre';

const famille = {
  membre1: {
    nom: 'Chris',
    age: 41
  },
  membre2: {
    nom: 'Khalisi',
    age: 40
  },
  membre3: {
    nom: 'Stephane',
    age: 5
  },
  membre4: {
    nom: 'Murdock',
    age: 9
  }
}
class App extends Component {
  state = {
    famille,
    isShown: false
  }

  handleClick = num => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    famille.membre2.age += num
    famille.membre3.age += num
    famille.membre4.age += num
    this.setState({ famille })
  }

  handleChange = event => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille.membre1.nom = nom
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShown = !this.state.isShown
    this.setState({ isShown })
  }


  render() {
    const { titre } = this.props
    const { famille, isShown } = this.state
    return (
      <div className="App">
        <h1>{titre}</h1>
        <input value={famille.membre1.nom} onChange={this.handleChange} type="text" />
        <Membre age={famille.membre1.age} nom={famille.membre1.nom} />
        <Membre age={famille.membre2.age} nom={famille.membre2.nom} />
        <Membre age={famille.membre3.age} nom={famille.membre3.nom} />
        <Membre age={famille.membre4.age} nom={famille.membre4.nom}>
          {
            isShown ? <strong>Je suis un chien</strong> : null
          }
          <button onClick={this.handleShowDescription}>
            {
              isShown ? 'Cacher' : 'Montrer'
            }
          </button>
        </Membre>
        <Button vieillir={() => this.handleClick(10)} />
      </div>
    )
  }
}

export default App;
