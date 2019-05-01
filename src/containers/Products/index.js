/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { default as ProductsComponent } from '../../components/Products';
import { loadProductsAPI } from '../../reducers/products';

class Products extends Component {
  componentDidMount() {
    const { loadProductsAPIProps } = this.props;
    loadProductsAPIProps();
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.length === 0 ? (
          <p>Loading....</p>
        ) : (
          <ProductsComponent data={data} />
        )}
      </div>
    );
  }
}

Products.defaultProps = {
  data: []
};

const mapStateToProps = state => {
  return {
    data: state.productsReducer.data
  };
};

const mapDispatchToProps = dispatch => ({
  loadProductsAPIProps: () => dispatch(loadProductsAPI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
