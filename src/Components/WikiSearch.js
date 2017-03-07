import React, {Component} from 'react';
import '../App.css'
import SearchList from './SearchList'

class WikiSearch extends Component {
  render() {
    const searchData = this.props.autoSearch;
    return(
      <div className="search">
        <div className="intro">
          <h1>Wikipedia Search</h1>
        </div>
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            value={this.props.search}
            placeholder="Search"
            onChange={this.props.handleSearchChange}
            onKeyPress={this.props.handleKeyPress} />
          <div className="searchClear">x</div>
          <div className="searchComplete">
            <SearchList title={searchData} />
          </div>
        </div>
      </div>
    )
  }
}

export default WikiSearch;
