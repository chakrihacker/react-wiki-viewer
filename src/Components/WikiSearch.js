import React, {Component} from 'react';
import '../App.css'
import SearchList from './SearchList'

class WikiSearch extends Component {
  render() {
    // console.log(this.props);
    const searchData = this.props.title;
    return(
      <div>
        <div className="search">
          <div className="intro">
            <h1>Wikipedia Search</h1>
          </div>
          <div className="searchBox">
            <input
              className={"searchInput " + (this.props.search.length === 0 ? '' : 'beforeSearchInput')}
              type="text"
              value={this.props.search}
              placeholder="Search"
              onChange={this.props.handleSearchChange}
              onKeyPress={this.props.handleKeyPress} />
            <div className="searchClear">x</div>
            <div className={"searchComplete " + (this.props.search.length === 0 ? '' : 'showSearchComplete')}>
              <SearchList title={searchData} links={this.props.links} />
            </div>
          </div>
        </div>
        <div className="success">
          <SearchList title={this.props.description} />
        </div>
      </div>
    )
  }
}

export default WikiSearch;
