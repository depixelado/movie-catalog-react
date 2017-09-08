import React from 'react';
import propTypes from 'prop-types';

class SearchBox extends React.Component {
  constructor(props) {
    super(props)

    this._handleSearchInputChange = this._handleSearchInputChange.bind(this);
  }

  _handleSearchInputChange(e) {
    const {
      updateSearchText,
      fetchMovies,
    } = this.props;

    updateSearchText(e.target.value);
    fetchMovies(e.target.value);
  }

  render () {
    const {
      updateSearchText,
      searchText,
    } = this.props;

    return (
      <div className="searchBox">
        <input
          className="searchBox__searchText"
          type="text"
          placeholder="Type a movie name"
          value={searchText}
          onChange={this._handleSearchInputChange}
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  searchText: propTypes.string,
  updateSearchText: propTypes.func,
};

export default SearchBox;