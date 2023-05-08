import { border } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";

const FinalPage = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <img
        style={{
          width: "18%",

          marginLeft: "580px",
          marginTop: "230px",

          boxShadow: "0px 9px 30px rgba(255, 149, 5, 0.3)",
        }}
        src="https://th.bing.com/th/id/OIP.W3qyVx_ESBauEhhIy4OHWQHaEG?pid=ImgDet&rs=1"
        alt="thankyou"
      />
      <h1 style={{ fontSize: "30px", color: "rgb(136, 99, 251)" }}>
        Your order has been placed!
      </h1>

      <button
        onClick={() => <Navigate to="/" />}
        style={{
          border: "1px solid c3c3f2",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,  rgb(209, 213, 219) 0px 0px 0px 1px inset",
          background:
            "linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))",
        }}
      >
        Go back to home
      </button>
    </div>
  );
};

export default FinalPage;
