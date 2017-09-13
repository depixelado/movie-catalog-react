import React from 'react';
import propTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class MovieSnippet extends React.Component {
  constructor(props) {
    super(props);
    
    this._handleSnippetClick = this._handleSnippetClick.bind(this);
  }

  _handleSnippetClick(movieId) {
    const {
      openMovieExplorer,
    } = this.props;

    openMovieExplorer(movieId);
  }

  render() {
    const {
      id,
      title,
      releaseYear,
      description,
      thumb,
      vote_average,
    } = this.props;

    return (
      <div className="movieSnippet animated fadeIn" onClick={this._handleSnippetClick.bind(null, id)}>
        <img className="movieSnippet__thumb" src={thumb} />
        <div className="movieSnippet__info animated">
          <div className="movieSnippet__title">
            {title}
          </div>
          <div className="movieSnippet__year">
            {releaseYear}
          </div>
          <FontAwesome 
            name="eye"
            size="2x"
          />
          <div className="movieSnippet__stars">
            {vote_average}
            <FontAwesome 
              name="star"
            />
          </div>
        </div>
      </div>
    );
  }
}

MovieSnippet.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  thumb: propTypes.string,
};

export default MovieSnippet;