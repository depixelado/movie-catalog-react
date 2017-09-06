import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Input from 'components/form/Input';

class SearchBox extends React.Component {
  constructor(props) {
    super(props)

    this._handleSearchInputChange = this._handleSearchInputChange.bind(this);
  }

  _handleSearchInputChange(e) {
    const {
      updateSearchText,
    } = this.props;

    updateSearchText(e.target.value);
  }

  render () {
    const {
      updateSearchText,
      searchText,
    } = this.props;

    return (
      <SearchInput
        type="text"
        placeholder="Type a movie name"
        value={searchText}
        onChange={this._handleSearchInputChange}
      />
    );
  }
}

SearchBox.propTypes = {
  searchText: propTypes.string,
  updateSearchText: propTypes.func,
};

const SearchInput = Input.extend`
  width: 100%;
  max-width: 500px;
`

export default SearchBox;