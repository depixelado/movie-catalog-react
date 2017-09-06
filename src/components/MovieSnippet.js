import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

class MovieSnippet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      title,
      description,
      thumb,
    } = this.props;

    return (
      <div className={className}>
        <MovieThumb src={thumb} />
        <MovieTitle>{title}</MovieTitle>
        <div>{description}</div>
      </div>
    );
  }
}

MovieSnippet.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  thumb: propTypes.string,
};

const MovieThumb = styled.img`
  float:left;
  width: 150px;
  height: auto;
  margin: -10px 10px -10px -10px;
`
const MovieTitle = styled.div`
  font-weight: bold;
`

export default MovieSnippet;