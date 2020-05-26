import React from "react";
import "../UICards.scss";

const UILongCard = ({ prodInfo }) => {
  return (
    <div>
      <div class="card">
        <h5 class="card-header">Tyre Information</h5>
        <div class="card-body">
          <h5 class="card-title">{prodInfo.prod_name}</h5>
          <p class="card-text">{prodInfo.prod_info}</p>
        </div>
      </div>

      <div class="card">
        <h5 class="card-header">Tyre Details</h5>
        <div class="card-body">
          <h5 class="card-title">{prodInfo.prod_name}</h5>
          <p class="card-text">{prodInfo.prod_details}</p>
          <a href="#" className="btn btn-primary ct-button-1">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default UILongCard;
