import React, { Component } from "react";

export default class BaiTapKinh extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: ".././img/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: ".././img/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: ".././img/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: ".././img/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: ".././img/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: ".././img/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: ".././img/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: ".././img/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: ".././img/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    kinh: {
      id: 1,
      name: "GUCCI G8850U",
      url: ".././img/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    gioHang: [],
  };

  changeKinh = (itemClick) => {
    console.log("itemClick", itemClick);
    this.setState({
      kinh: itemClick,
    });
  };
  renderProduct = () => {
    return this.arrProduct.map((item, index) => {
      return (
        <div key={index} className="col-2 mt-5">
          <button
            className="btn ml-2"
            onClick={() => {
              this.changeKinh(item);
            }}
          >
            <img src={item.url} height="50px" />
          </button>
        </div>
      );
    });
  };
  render() {
    let { id, name, url, desc } = this.state.kinh;
    return (
      <div className="container-fluid p-0 " style={{ position: "relative" }}>
        <div>
          <img src=".././img/background.jpg  " height="800" width="100%" />
        </div>
        <div
          className="container-fluid p-0"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <h1
            className="display-4 text-white"
            style={{ backgroundColor: "#000000bf" }}
          >
            Try Glass App Online
          </h1>
          <div className="row mt-5">
            <div className="col-6" style={{ position: "relative" }}>
              <div>
                <img src=".././img/model.jpg" height="300" />
              </div>
              <div style={{ position: "absolute", top: 80, left: 333 }}>
                <img src={url} alt={name} height="40px" />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 264,
                  width: 247,
                  height: 94,
                  backgroundColor: "#ffa5009c",
                  textAlign: "left",
                }}
              >
                <h3 className="text-secondary">{name}</h3>
                <p className="text-white">{desc}</p>
              </div>
            </div>
            <div className="col-6">
              <img src=".././img/model.jpg" height="300" />
            </div>
          </div>
          <div className="container bg-dark  mt-5" style={{ height: 300 }}>
            <div className="row ">{this.renderProduct()}</div>
          </div>
        </div>
      </div>
    );
  }
}
