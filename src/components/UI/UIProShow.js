import React, { Component } from "react";

import "../css/Components.css";
import UIHorizontalCard from "./UICardComponents/UIHorizontalCard";
import UILongCard from "./UICardComponents/UILongCard";

class UIProShow extends Component {
  state = {
    prodInfo: null,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchProdInfo()
      .then((res) => this.setState({ prodInfo: res }))
      .catch((err) => console.log(err));
  }

  fetchProdInfo = async () => {
    const response = await fetch("/prods/" + this.props.match.params.variable);
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  imgSrc = (id) => {
    const imageSrc = "/prodsImage/image/" + id;
    return (
      // <Card.Img variant="top" src={imageSrc} style={{ maxWidth: "240px" }} />
      <img className="card-img" src={imageSrc} alt={imageSrc} />
    );
  };

  render() {
    console.log(this.props);
    console.log(this.state.prodInfo);

    return (
      <div className="switch-component">
        {this.state.prodInfo !== null ? (
          <div>
            <UIHorizontalCard
              prodInfo={this.state.prodInfo}
              imgSrc={this.imgSrc(this.state.prodInfo.prod_image_id)}
            />
            <hr />
            <UILongCard prodInfo={this.state.prodInfo} />
          </div>
        ) : (
          <h3> Can not get >>> this.state.prodInfo</h3>
        )}
      </div>
    );
  }
}

export default UIProShow;
