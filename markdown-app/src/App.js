import './App.css';

import React, { Component } from 'react';

// ! import the React Component functionnalites from the react library 
import marked from 'marked';

// ! import the functionnalities of the marked library
import { sampleText } from './sampleText';

// ! import the sample text from the sampleText js file 

class App extends Component {
  state = {
    text: sampleText
  }

  // ! When the component is Mounted, get the text into the localStorage, children of the 'text' key
  componentDidMount() {
    const text = localStorage.getItem('text')

    // ! while all the text is not deleted, display what lefts, else display back the sampleText text
    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
  }

  // ! for each update of the component, store the text content with the 'text' key, into the localStorage
  componentDidUpdate() {
    const { text } = this.state
    localStorage.setItem('text', text)
  }
  // ! event is the argument to replace on the function execution
  // ! the text variable should be equal to the value(value) of the textArea(target) we want to get
  // ! handleChange is related to the onChange (event) on line 54
  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
    // ! then update the state with the actual textArea value
  }

  // ! use the marked library to return the html form of the text with the sanitize option 
  // ! (no code injection while translating)
  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
    // ! then return the result of this function
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange}
              // ? everytime something changes into the textarea, trigger the handleChange function
              value={this.state.text}
              // ? the value is the sampleText
              className="form-control"
              rows="35">

            </textarea>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
            // ? dangerous... is a keyword that talks by itself. trigger the renderText function, then replace
            // ? 'text' argument by 'this.state.text'
          </div>
        </div>
      </div>
    )
  }
}
export default App;
