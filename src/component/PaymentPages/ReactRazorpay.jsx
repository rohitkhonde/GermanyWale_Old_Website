import React, { useState } from "react";

const ReactRazorpay = () => {
  const [paymentId, setPaymentId] = useState("");
  const loadscript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  return <div></div>;
};

export default ReactRazorpay;
