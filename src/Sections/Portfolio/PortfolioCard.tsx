import React from "react";
import "./Portfolio.css";

const PortfolioCard = (portfolio) => {
  const { name, img } = portfolio.portfolio;
  console.log(portfolio.portfolio);
  return (
    <div>
      <div className="card-body">
        <div>
          <img className="card-img" src={img} alt="" />
        </div>
        <div>
          <h3 className="card-main-text">{name}</h3>
        </div>
        <div>
          <button className="glow-btn-card">Details</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
