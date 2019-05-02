/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductsAPI } from '../../reducers/products';
import { getSizeFilterDataAPI } from '../../reducers/filter';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    const { getSizeFilterDataAPIProps } = this.props;
    getSizeFilterDataAPIProps();
  }

  change = e => {
    const { loadProductsAPIProps } = this.props;
    this.setState({ value: e.target.value });
    loadProductsAPIProps(e.target.value);
  };

  buildLayout = data => {
    const res = data.map(item => {
      return (
        <option value={item} key={item}>
          {item}
        </option>
      );
    });

    return res;
  };

  render() {
    const { data } = this.props;
    const { value } = this.state;
    return (
      <div className="filter">
        <select onChange={this.change.bind(this)} value={value}>
          <option value="">Filter by size</option>
          {this.buildLayout(data)}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.filterReducer.data
  };
};

const mapDispatchToProps = dispatch => ({
  loadProductsAPIProps: val => dispatch(loadProductsAPI(val)),
  getSizeFilterDataAPIProps: () => dispatch(getSizeFilterDataAPI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
