import React from "react";
import "../styles/pageStyles/home.css";

const HomePage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
      <div className="cards">
        <div className="row">
          <div className="col-md-4">
            <div className="card1">
              <div className="img-card">
                <img
                  src="https://www.shutterstock.com/image-photo/woman-hand-holding-laptop-tablet-260nw-1856949259.jpg"
                  alt="restagleImg"
                />
              </div>
              <div className="card-info">
                <span>All You Need to Start</span>
                <p>
                  Add WooCommerce plugin to any WordPress site and set up a new
                  store in minutes.
                </p>
                <a href="#">Ecommerce for Wordpress ›</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card2">
              <div className="img-card">
                <img
                  src="https://www.shutterstock.com/image-vector/financial-stock-exchanging-transactions-system-260nw-2146662405.jpg"
                  alt="card1Img"
                />
              </div>
              <div className="card-info">
                <span>All You Need to Start</span>
                <p>
                  Add WooCommerce plugin to any WordPress site and set up a new
                  store in minutes.
                </p>
                <a href="#">Ecommerce for Wordpress ›</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card3">
              <div className="img-card">
                <img
                  src="https://www.shutterstock.com/image-photo/online-marketplace-ecommerce-internet-shopping-260nw-1984131821.jpg"
                  alt="card1Img"
                />
              </div>
              <div className="card-info">
                <span>All You Need to Start</span>
                <p>
                  Add WooCommerce plugin to any WordPress site and set up a new
                  store in minutes.
                </p>
                <a href="#">Ecommerce for Wordpress ›</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
