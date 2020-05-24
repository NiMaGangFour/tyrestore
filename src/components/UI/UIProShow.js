import React, { Component } from "react";

import "../css/Components.css";

class UIProShow extends Component {
  state = {
    prodInfo: null,
  };

  componentDidMount() {
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
        <div className="card mb-3">
          {this.state.prodInfo !== null ? (
            <div className="row no-gutters">
              <div className="col-md-4">
                {/* <img src="..." className="card-img" alt="prod" /> */}
                {this.imgSrc(this.state.prodInfo.prod_image_id)}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {this.state.prodInfo.prod_name}Card title
                  </h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h3> Can not get >>> this.state.prodInfo</h3>
          )}
        </div>
      </div>
    );
  }
}

export default UIProShow;
