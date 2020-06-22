import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {

  state = {
    inputText : 'Empty text'    
  };

  inputTextChanged = (event) => {
    this.setState({
      inputText : event.target.value
    });
  };

  singleCharacterClicked = (characterValue) => {
    let currentInputText = this.state.inputText;
    currentInputText = currentInputText.replace(characterValue, '');
    this.setState({
      inputText : currentInputText
    });
  };

  render() {

    const charComponentsExtracted = (
      <div>
        {
          this.state.inputText.split('').map((val, index) => {
            return (
              <CharComponent key={index} singleCharacter={val} click={() => this.singleCharacterClicked(val)} />
            );
          })
        }
        </div>
    );

    return (
      <div className="App">
        <input type="text" value={this.state.inputText} onChange={(event) => this.inputTextChanged(event)} />
        <ValidationComponent length={this.state.inputText.length}/>
        {charComponentsExtracted}
      </div>
    );
  }
}

export default App;
