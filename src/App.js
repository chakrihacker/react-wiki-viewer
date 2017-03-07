import React, { Component } from 'react';
import './App.css';
import WikiSearch from './Components/WikiSearch'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      autoSearch: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange(e) {
    let self = this;
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search="
    fetch(url+e.target.value)
      .then(function (res) {
        res.json().then(function (data) {
          self.setState({
            autoSearch: data[1]
          })
        })
      })
    this.setState({
      search: e.target.value
    })
}

handleEnter(e) {
  if (e.key === 'Enter') {
    console.log(this.state.search);
  }
}

  render() {
    return (
      <div className="App">
        <WikiSearch
          search={this.state.search}
          handleSearchChange={this.handleChange}
          handleKeyPress={this.handleEnter}
          autoSearch={this.state.autoSearch}  />
      </div>
    );
  }
}

export default App;
