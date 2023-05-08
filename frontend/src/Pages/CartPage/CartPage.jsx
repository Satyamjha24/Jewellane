import React from "react";
import "./CartPage.css";
import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";
import CartFooter from "./CartFooter";

const CartPage = () => {
  return (
    <div>
      <div id="main-div">
        <div id="left-div">
          <div className="first-div">
            <div className="container1">
              <img
                src="https://assets.cltstatic.com/images/responsive/tah-trusted-banner.png"
                alt="happy try"
              />
            </div>
            <div className="container2">
              <h1 style={{ color: "rgb(136, 99, 251)" }}>
                But only if you like!
              </h1>
              <h2>Our try at Home slots are limited and are Filling Fast!</h2>
            </div>
          </div>
          <h1 className="items">Items</h1>
          <div id="second-div">
            <div className="product">
              <div className="product-image">
                <img
                  src="https://cdn.caratlane.com/media/catalog/product/cache/6/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/U/E/UE06258-1R00RS_1_lar.jpg"
                  alt="product-ima"
                />
              </div>
              <div className="price-container">
                <p>Ebban Diamond Bracelet</p>
                <p>JT12345-1RD234</p>
                <br />
                <br />
                <p>Rs.100.00</p>
              </div>
            </div>
            <div className="remove-button">
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div id="right-div">
          <p
            style={{
              fontWeight: "600",
              width: "50%",
              fontSize: "25px",
              marginTop: "20px",
              color: "rgb(136, 99, 251)",
            }}
          >
            Order Summary :
          </p>
          <div className="order-price">
            <div>
              <p>Service Charge</p>
              <br />
              <p style={{ fontSize: "25px", fontWeight: "600" }}>Total Cost</p>
            </div>
            <div>
              <p>Free </p>
              <br />
              <p>Rs. 100</p>
            </div>
          </div>
          <button
            className="place-order"
            onClick={() => <Link to="/Payment"></Link>}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      <div>
        <CartFooter />
      </div>
    </div>
  );
};

export default CartPage;
