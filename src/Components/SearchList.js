import React, {Component} from 'react';
import '../App.css'

class SearchList extends Component {
  render() {
    const titleData = this.props.title;
    const listData = titleData.map((data) =>
      <li key={data}>{data}</li>
    );
    return(
      <ul>
        {listData}
      </ul>
    )
  }
}

export default SearchList;
