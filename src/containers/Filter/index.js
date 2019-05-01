/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductsAPI } from '../../reducers/products';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  change = e => {
    const { loadProductsAPIProps } = this.props;
    this.setState({ value: e.target.value });
    loadProductsAPIProps(e.target.value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="filter">
        <select onChange={this.change.bind(this)} value={value}>
          <option value="">Filter by size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  loadProductsAPIProps: val => dispatch(loadProductsAPI(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
