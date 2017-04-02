import React, { PropTypes } from 'react';

import ProductListItem from '../ProductListItem';

const ProductList = ({ products }) => (
  <div className="ProductList">
    <ul className="ProductList__list">
      {products.map(product => <ProductListItem key={product.id} {...product} />)}
    </ul>
  </div>
);

ProductList.displayName = 'ProductList';

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
