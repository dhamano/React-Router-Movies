import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <ul>
          {this.props.list.map( (movie,i) => (
            <li><Link key={i} to={`/movie/${movie.id}`} className="saved-movie">{movie.title}</Link></li>
          ))}
        </ul>
        <Link to="/" className="home-button">Home</Link>
      </div>
    );
  }
}
