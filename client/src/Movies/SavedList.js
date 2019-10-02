import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
            <li key={i}><NavLink to={`/movie/${movie.id}`} className="saved-movie" activeClassName="selected">{movie.title}</NavLink></li>
          ))}
        </ul>
        <Link to="/" className="home-button">Home</Link>
      </div>
    );
  }
}
