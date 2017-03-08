import React, {Component} from 'react';
import '../App.css'

class SearchList extends Component {
  render() {
    const titleData = this.props.title;
    const data = titleData.map((title, index) =>
      <li className="autoResult" key={index}>
        <a href="#">{title}</a>
      </li>
    );
    return(
      <ul className="autoResults">
        {data}
      </ul>
    )
  }
}

export default SearchList;
