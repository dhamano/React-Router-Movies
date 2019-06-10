import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movieData;
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </React.Fragment>
  );
};

export default MovieCard;
