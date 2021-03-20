import React, { Component } from "react";
import BtCarousel from "./BtCarousel";
import BTProductList from "./BTProductList";

export default class Btcontent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <BtCarousel />
          <BTProductList />
        </div>
      </div>
    );
  }
}
