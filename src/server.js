// const express = require("express");
// const axios = require("axios");
// const crypto = require("crypto");
// const cors = require("cors"); // Import CORS middleware
// const app = express();
// const port = 8000;

// // Enable CORS for all routes
// app.use(cors());

// // Middleware to parse JSON
// app.use(express.json());

// // PhonePe API credentials
// const MERCHANT_ID = "PHONEPEPGUAT"; // Replace with your Merchant ID
// const SALT_KEY = "c817ffaf-8471-48b5-a7e2-a27e5b7efbd3"; // Replace with your Salt Key
// const SALT_INDEX = 1; // Replace with your Salt Index

// // Endpoint to initiate payment
// app.post("/initiate-payment", async (req, res) => {
//   const { amount } = req.body;

//   // Generate a unique transaction ID
//   const merchantTransactionId = "MT7850590068188104";

//   // Payload for PhonePe API
//   const payload = {
//     merchantId: "PGTESTPAYUAT",
//     merchantTransactionId: "MT7850590068188104",
//     merchantUserId: "MUID123",
//     amount: 10000,
//     redirectUrl: "https://webhook.site/redirect-url",
//     redirectMode: "REDIRECT",
//     callbackUrl: "https://webhook.site/callback-url",
//     mobileNumber: "9999999999",
//     paymentInstrument: {
//       type: "PAY_PAGE",
//     },
//   };

//   // const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");
//   // console.log(base64Payload);

//   // Convert payload to base64
//   const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");

//   // Generate checksum
//   const checksum =
//     crypto
//       .createHash("sha256")
//       .update(base64Payload + "/pg/v1/pay" + SALT_KEY)
//       .digest("hex") +
//     "###" +
//     SALT_INDEX;

//   try {
//     // Make API call to PhonePe
//     const response = await axios.post(
//       "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
//       {
//         request: base64Payload,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "X-VERIFY": checksum,
//         },
//       }
//     );

//     // Return the payment URL to the frontend
//     res.json({ url: response.data.data.instrumentResponse.redirectInfo.url });
//   } catch (error) {
//     console.error("Error initiating payment:", error);
//     res.status(500).json({ error: "Payment initiation failed" });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
