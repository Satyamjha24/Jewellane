import React, { useState, useEffect } from "react";
import "./CartPage.css";
import { Link } from "react-router-dom";
// import Payment from "../Payment/Payment";
import CartFooter from "./CartFooter";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";

// import { addToCart, getProduct } from "../redux/Product/action";
const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  // const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    
    setCartItems(items);
    // console.log(items);
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
    localStorage.setItem("totalPrice", total);
  }, [cartItems]);
  const handleQuantityChange = (index, newQuantity) => {
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };
  const handleRemoveItem = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  return (
    <>
      <Navbar />
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
          <div>
            {cartItems.map((item, index) => (
              <div id="second-div" key={item.data}>
                <div className="product">
                  <div className="product-image">
                    <img src={item.image} alt="product-ima" />
                  </div>
                  <div className="price-container">
                    <p style={{ fontSize: "15px" }}>{item.title}</p>
                    <p style={{ fontSize: "16px" }}>JT12345-1RD234</p>
                    <br />
                    <p style={{ fontSize: "16px" }}>
                      We will bring similar designs!
                    </p>

                    <br />
                    <br />
                    <p>₹{item.price}</p>
                  </div>
                </div>
                <div className="quantity">
                  <button
                    className="quantity-button"
                    onClick={() =>
                      handleQuantityChange(index, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="quantity-button"
                    onClick={() =>
                      handleQuantityChange(index, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="remove-button">
                  <button onClick={() => handleRemoveItem(index)}>
                    {" "}
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {cartItems.length > 0 ? (
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
                <p style={{ fontSize: "25px", fontWeight: "600" }}>
                  Total Cost:
                </p>
              </div>
              <div>
                <p>Free </p>
                <br />
                <p>₹{+totalPrice}</p>
              </div>
            </div>
            <Link to="/payment">
              <button className="place-order">Proceed to Payment</button>
            </Link>
          </div>
        ) : (
          <div>
            Your cart is empty.
            <br />
            <br />
            <h1 style={{ color: "blue" }}>
              <Link to="/product">Start shopping now!</Link>
            </h1>
          </div>
        )}
      </div>

      <CartFooter />
      <Footer />
    </>
  );
};

export default CartPage;
