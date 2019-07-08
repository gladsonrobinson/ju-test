import { PureComponent } from "react";
import { connect } from "react-redux";
import { getProducts, addItemToCart } from "./actions";

const mapStateToProps = state => ({
  ...state.movies
});

const mapDispatchToProps = {
  getProducts,
  addItemToCart
};

class Products extends PureComponent {
  render() {
    return this.props.children({ ...this.props });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
