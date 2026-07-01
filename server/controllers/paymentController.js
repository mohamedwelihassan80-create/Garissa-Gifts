import axios from "axios";
import moment from "moment";
import generateAccessToken from "../config/mpesa.js";

// =======================
// Get Access Token
// =======================
export const getAccessToken = async (req, res) => {
  try {
    const token = await generateAccessToken();

    res.status(200).json({
      success: true,
      accessToken: token,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate access token",
    });
  }
};

// =======================
export const stkPush = async (req, res) => {
  try {
    console.log("1. STK Push started");

    const timestamp = moment().format("YYYYMMDDHHmmss");
    console.log("2. Timestamp generated");

    const password = Buffer.from(
      process.env.MPESA_SHORTCODE +
      process.env.MPESA_PASSKEY +
      timestamp
    ).toString("base64");
    console.log("3. Password generated");

    const accessToken = await generateAccessToken();
    console.log("4. Access token generated");

    const { phoneNumber, amount } = req.body;
    console.log("5. Phone Number:", phoneNumber);
    console.log("6. Amount:", amount);

    console.log({
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      PhoneNumber: phoneNumber,
      PartyA: phoneNumber,
      PartyB: process.env.MPESA_SHORTCODE,
      Amount: amount,
    });

    console.log("7. Sending STK Push to Safaricom...");

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: "Garissa Gifts",
        TransactionDesc: "Order Payment",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("8. Safaricom Response:", response.data);

    res.status(200).json(response.data);

  } catch (error) {
    console.error("❌ Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "STK Push failed",
      error: error.response?.data || error.message,
    });
  }
};