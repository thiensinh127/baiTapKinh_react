import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { productItem } = this.props;
    return (
      <div>
        <div className="card  ">
          <img
            className="card-img-top"
            src={productItem.hinhAnh}
            alt={productItem.tenSP}
            height="300"
          />
          <div className="card-body">
            <h4 className="card-title">{productItem.tenSP}</h4>
            <p className="card-text">
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.viewDetail(productItem);
                }}
              >
                Xem chi tiết
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.props.themGioHang(productItem);
                }}
              >
                Thêm vào Giỏ hàng
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
