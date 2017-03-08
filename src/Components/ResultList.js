import React, {Component} from 'react';
import '../App.css'

class ResultList extends Component {
  render() {
    const titleData = this.props.title;
    const descriptionData = this.props.description;
    const linksData = this.props.links;
    const data = titleData.map((title, index) =>
      <li key={index} className="result">
        <a href={linksData[index]} target="_blank">
          <h1>{title}</h1>
          <p>{descriptionData[index]}</p>
        </a>
      </li>
    )
    return(
      <ul className="results">
        {data}
      </ul>
    );
  }
}

export default ResultList;
