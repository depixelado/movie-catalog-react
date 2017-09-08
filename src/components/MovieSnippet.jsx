import React from 'react';
import propTypes from 'prop-types';

class MovieSnippet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      year,
      description,
      thumb,
    } = this.props;

    return (
      <div className="movieSnippet animated fadeIn">
        <img className="movieSnippet__thumb" src={thumb} />
        <div className="movieSnippet__info animated">
          <div className="movieSnippet__title">
            {title}
          </div>
          <div className="movieSnippet__year">
            {year}
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