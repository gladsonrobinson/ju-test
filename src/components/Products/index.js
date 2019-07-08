import React from "react";
import "./products.css";

export default class Products extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(item) {
      console.log(item)
    this.props.addItemToCart(item);
  }
  render() {
    return (
      <ul className="product-list">
        {this.props.products &&
          this.props.products.map(menu => (
            <li className="movie-list__item" key={menu.id}>
              <div>{menu.name}</div>
              <ul>
                {menu.items &&
                  menu.items.map(item => {
                    return (
                      <li key={item.id}>
                        {item.title}{" "}
                        <button onClick={() => this.addItemToCart(item)}>
                          ADD TO CART
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </li>
          ))}
      </ul>
    );
  }
}
