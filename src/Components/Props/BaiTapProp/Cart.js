import React, { Component } from "react";

export default class Cart extends Component {
  renderGioHang = () => {
    //Lấy dữ liệu component cha truyền vào thông qua props
    let { gioHang } = this.props;

    return (
      <tr>
        <td>{gioHang.maSP}</td>
        <td>{gioHang.tenSP}</td>
        <td>
          <img src={gioHang.hinhAnh} alt={gioHang.tenSP} width="50" />
        </td>
        <td>{gioHang.gia}</td>
        <td>{gioHang.soLuong}</td>
        <td>{gioHang.gia * gioHang.soLuong}</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="container">
        <h1>Giỏ Hàng(1)</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình Ảnh</th>
              <th>Đơn Giá</th>
              <th>Số Lượng</th>
              <th>Thành Tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
