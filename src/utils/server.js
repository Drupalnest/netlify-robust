const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:8000/handleGoogleRedirect"
);

app.post("/createAuthLink", cors(), async (req, res) => {
  try {
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/calendar",
      ],
      prompt: "consent",
    });
    res.send({ url });
  } catch (error) {
    console.log("Error creating auth link:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/handleGoogleRedirect", async (req, res) => {
  try {
    const code = req.query.code;
    oauth2Client.getToken(code, (err, tokens) => {
      if (err) {
        console.log("Error getting token:", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      const accessToken = tokens.access_token;
      const refreshToken = tokens.refresh_token;

      res.redirect(
        `http://localhost:8000?accessToken=${accessToken}&refreshToken=${refreshToken}`
      );
    });
  } catch (error) {
    console.log("Error handling Google redirect:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/getValidToken", async (req, res) => {
  try {
    const response = await fetch("https://www.googleapis.com/oauth2/v4/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        refresh_token: req.body.refreshToken,
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json();
    console.log("Got new token from server:", data.access_token);
    res.json({
      accessToken: data.access_token,
    });
  } catch (error) {
    console.log("Error getting new token:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
