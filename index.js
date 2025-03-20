const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors"); // Import cors middleware

const app = express();
const port = 5000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_OaZFgQnMYQ9Gmd", // Replace with your Razorpay Key ID
  key_secret: "khbDOAkhnVDUvbs71BRt06n1", // Replace with your Razorpay Key Secret
});

// Create Order Endpoint
app.post("/orders", async (req, res) => {
  try {
    const options = req.body; // Get the request body

    // Create a Razorpay order
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).json({ error: "Failed to create order" });
    }

    // Return the order details
    res.json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log("Listening on port", port);
});
