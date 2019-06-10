import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList: savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />

        <Route exact path="/" component={MovieList} />
        <Route path="/movie/:movieId" render={({match}) => <Movie match={match} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}
