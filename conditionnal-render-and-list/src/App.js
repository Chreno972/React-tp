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

  handleChange = (event, id) => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({ famille })
  }

  hideName = id => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShown = !this.state.isShown
    this.setState({ isShown })
  }


  render() {
    const { titre } = this.props
    const { famille } = this.state


    const liste = Object.keys(famille).map(membre => (
      <Membre key={membre} handleChange={event => this.handleChange(event, membre)} hideName={() => this.hideName(membre)} age={famille[membre].age} nom={famille[membre].nom} />
    ))
    console.log(liste);

    return (
      <div className="App">
        <h1>{titre}</h1>
        { liste}

        <Button vieillir={() => this.handleClick(10)} />
      </div>
    )
  }
}

export default App;
