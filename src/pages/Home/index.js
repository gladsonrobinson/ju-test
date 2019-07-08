import React from "react";
import MProductContainer from "../../containers/Products";
import { ProductWrapper, Products, Cart} from "../../components";

export default class Home extends React.Component {
  render() {
    return (
      <MProductContainer>
        {({ cart, productList, getProducts, addItemToCart }) => {
          return (
            <ProductWrapper getProducts={getProducts}>
              <Products products={productList} addItemToCart={addItemToCart}  />
              <Cart cart={cart} />
            </ProductWrapper>
          );
        }}
      </MProductContainer>
    );
  }
}
