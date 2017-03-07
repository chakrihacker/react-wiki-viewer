import React, {Component} from 'react';
import '../App.css'

class SearchList extends Component {
  const searchData = this.props.autoSearch;
  const searchItem = searchData.map((item) =>
    <li key={item}>
      {item}
    </li>
  )
  render() {
    return(
      <ul>{searchItem}</ul>
    )
  }
}

export default SearchList;
