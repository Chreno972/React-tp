import './App.css';

import React, { Component } from 'react';

import Button from './components/button';
import Perso from './components/Perso';

const Personnages = {
  Perso1: {
    name: 'Christophe',
    age: 41,
    profession: 'Web Developper',
    gender: 'male'
  },
  Perso2: {
    name: 'Sandrine',
    age: 38,
    profession: 'Helpdesk',
    gender: 'female'
  },
  Perso3: {
    name: 'Margarey',
    age: 41,
    profession: 'Actress',
    gender: 'female'
  },
  Perso4: {
    name: 'Khalessi',
    age: 39,
    profession: 'Porn actress',
    gender: 'female'
  },
  Perso5: {
    name: 'Martigalle',
    age: 35,
    profession: 'Designer',
    gender: 'male'
  }
}

const Pet = {
  Pet1: {
    name: 'Francis',
    type: 'dog'
  },
  Pet2: {
    name: 'Ulrich',
    type: 'cat'
  },
  Pet3: {
    name: 'Coco',
    type: 'horse'
  },
}

class App extends Component {
  state = { // ? récupère les informations des objects Personnages et Pet
    Personnages,
    Pet
  }

  handleClick = (num) => {
    const Personnages = { ...this.state.Personnages }// ? constante qui reprend tous les éléments de l'objet
    Personnages.Perso1.age += num // ? rajoute 1 à l'âge à chaque click
    this.setState({ Personnages }) // ? met à jour le state de personnages
  }

  handleChange = event => {
    const Personnages = { ...this.state.Personnages }
    // ! const name = event.target.value 
    // ce que l'on écrit dans l'input (event = onChange, target = what happens with the target, value = the value)
    // ! Personnages.Perso1.name = name
    // le nom du personnage est égal à ce que l'on écrit dans l'input
    const name = event.target.value
    Personnages.Perso1.name = name
    this.setState({ Personnages })
  }
  render() {
    const { title } = this.props // ! destructuring (titre = this.titre.props)
    const { Personnages, Pet } = this.state
    return (
      <div className="App">
        <h1>{title}</h1>
        <input value={Personnages.Perso1.name} onChange={this.handleChange} type="text" />
        <Perso name={Personnages.Perso1.name} age={Personnages.Perso1.age} profession={Personnages.Perso1.profession} />
        <Perso name={Personnages.Perso2.name} age={Personnages.Perso2.age} profession={Personnages.Perso2.profession} />
        <Perso name={Personnages.Perso3.name} age={Personnages.Perso3.age} profession={Personnages.Perso3.profession} />
        <Perso name={Personnages.Perso4.name} age={Personnages.Perso4.age} profession={Personnages.Perso4.profession}>
          <strong>I am {Personnages.Perso4.name}'s {Pet.Pet1.type} my name is {Pet.Pet1.name}</strong>
        </Perso>
        <Perso name={Personnages.Perso5.name} age={Personnages.Perso5.age} profession={Personnages.Perso5.profession}>
          <strong>I am {Personnages.Perso5.name}'s {Pet.Pet3.type} my name is {Pet.Pet3.name}</strong>
        </Perso>
        <Button addAge={() => this.handleClick(3)} />
      </div>
      // ? we pass addAge to the Button component, then, we use the addAge here as a props to pass 
      // ? the Handleclick to the Button here. a component is kind of a skeleton function here
    )
  }
}

export default App;
