import React from "react";
//import "./cart.css";

export default class Cart extends React.PureComponent {
  render() {
    return (
      <>
        <h2>Cart</h2>
        <ul className="cart-list">
          {this.props.cart &&
            this.props.cart.map(item => (
              <li key={item.id}>
                {item.title}
                <button>X</button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
