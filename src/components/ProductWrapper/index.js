import React from "react";

export default class ProductWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <section className="container container--products">
        {this.props.children}
      </section>
    );
  }
}
