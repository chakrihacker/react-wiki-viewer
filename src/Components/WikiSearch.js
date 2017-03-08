import React, {Component} from 'react';
import '../App.css';
import SearchList from './SearchList';
import ResultList from './ResultList';

class WikiSearch extends Component {
  render() {
    const searchData = this.props.title;
    return(
        <div className="search">
          <div className="intro">
            <h1>Wikipedia Search</h1>
          </div>
          <div className="searchBox">
            <input
              className={"searchInput " + ((this.props.search.length===0) || (this.props.enterPressed) ? '' : 'beforeSearchInput')}
              type="text"
              value={this.props.search}
              placeholder="Search"
              onChange={this.props.handleSearchChange}
              onKeyPress={this.props.handleKeyPress} />
            <div className="searchRandom" title="Random">
              <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
                <i className="fa fa-random fa-lg">
                </i>
              </a>
            </div>
            <div className={"searchComplete " + ((this.props.search.length===0) || (this.props.enterPressed) ? '' : 'showSearchComplete')}>
              <SearchList title={searchData} links={this.props.links} />
            </div>
          </div>
          <div className={"success " + (this.props.enterPressed || this.props.inputChanged ? 'showSuccess' : '')}>
            <ResultList
              title={this.props.title}
              description={this.props.description}
              links={this.props.links}  />
          </div>
        </div>
    )
  }
}

export default WikiSearch;
