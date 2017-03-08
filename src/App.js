import React, { Component } from 'react';
import './App.css';
import WikiSearch from './Components/WikiSearch'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      searchSuggestions: [],
      title: [],
      description: [],
      links: [],
      enterPressed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange(e) {
    let self = this;
    if (e.target.value.length>0) {
      const url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search="
      fetch(url+e.target.value)
        .then(function (res) {
          res.json().then(function (data) {
            self.setState({
              title: data[1],
              description: data[2],
              links: data[3]
            })
          })
        });
    } else {
      self.setState({
        title: [],
        description: [],
        links: []
      })
    }
    this.setState({
      search: e.target.value
    })
}

handleEnter(e) {
  let self = this;
  if (e.key === 'Enter') {
    self.setState({
      enterPressed: true
    })
  }
}

  render() {
    return (
      <div className="App">
        <WikiSearch
          search={this.state.search}
          handleSearchChange={this.handleChange}
          handleKeyPress={this.handleEnter}
          title={this.state.title}
          description={this.state.description}
          links={this.state.links}
          enterPressed={this.state.enterPressed}  />
      </div>
    );
  }
}

export default App;
