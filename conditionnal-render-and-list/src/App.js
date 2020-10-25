import './App.css';

import React, { Component } from 'react';

// ! import your components here
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
class App extends Component {// ! use all the Component functionnalites for the App class
  state = {
    famille, // ! get the 'famille' constant
    isShown: false // ! by default, don't display something
  }

  // ! when you click the button 'vieillir', use the num argument to increment 
  // ! the actual age of each member by one
  handleClick = num => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    famille.membre2.age += num
    famille.membre3.age += num
    famille.membre4.age += num
    this.setState({ famille })
    // ! then we set the actual state of the 'famille' object
  }

  handleChange = (event, id) => {
    const famille = { ...this.state.famille } // ! spread all the object content into another 'famille' variable
    const nom = event.target.value // ! set the nom variable with the value of the target
    famille[id].nom = nom // ! set the id of the target with its own value
    this.setState({ famille })
    // ! then we set the actual state of the 'famille' object
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
      //  ! foreach membre into famille
      <Membre
        key={membre}// ! the id of a membre is the same as it's name
        handleChange={event => this.handleChange(event, membre)}// ! increment the age by 'num' here it's 10
        hideName={() => this.hideName(membre)}// ! trigger the function to hide the 'membre'
        age={famille[membre].age}// ! display the age and the name of each member
        nom={famille[membre].nom} />
    ))
    console.log(liste);

    return (
      <div className="App">
        <h1>{titre}</h1>
        { liste}// ! the liste object is the loop that displays each 'member' of the 'famille'

        <Button vieillir={() => this.handleClick(10)} />
      </div>
    )
  }
}

export default App;
