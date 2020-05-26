import React from "react";

const UIHorizontalCard = ({ prodInfo, imgSrc }) => {
  //   if (loading) {
  //     return <h2>Loading....</h2>;
  //   }
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {/* <img src="..." className="card-img" alt="prod" /> */}
            {imgSrc}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{prodInfo.prod_name}Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIHorizontalCard;
