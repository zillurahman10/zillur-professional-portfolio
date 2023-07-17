import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import "swiper/css";
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
      <div>
        {portfolio.map((pt) => (
          <PortfolioCard key={pt._id} portfolio={pt}></PortfolioCard>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
