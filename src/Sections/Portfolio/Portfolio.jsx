import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard.tsx";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/portfolios")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);

  return (
    <div>
      <h1 className="portfolio-heading">My Portfolios</h1>
      <div className="card-grid">
        {portfolio.slice(0, 3).map((pt) => (
          <PortfolioCard key={pt._id} portfolio={pt}></PortfolioCard>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <button
          className="glow-btn-card"
          style={{
            width: "200px",
          }}
        >
          See more
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
