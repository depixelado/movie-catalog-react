import React, { Component } from 'react';
import propTypes from 'prop-types';

class CounterBtn extends Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    const {
      handleChangeCounter,
    } = this.props
    
    handleChangeCounter()
  }

  render() {
    const {
      label,
    } = this.props;

    return (
      <button 
        onClick={this._handleClick}
      >
        {label}
      </button>
    );
  }
}

CounterBtn.propTypes = {
  label: propTypes.string,
  handleChangeCounter: propTypes.func,
};

export default CounterBtn