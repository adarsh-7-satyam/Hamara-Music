const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

const router = express.Router();

/**
 * =========================
 * SIGNUP (SEND / RESEND OTP)
 * =========================
 */
router.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    let user = await User.findOne({ email });

   // VERIFIED USER
if (user && user.verified) {
  return res.status(409).json({
    status: "verified",
    message: "Email already registered"
  });
}

// UNVERIFIED USER
if (user && !user.verified) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  user.otp = otp;
  user.otpExpiry = Date.now() + 10 * 60 * 1000;
  await user.save();
  await sendEmail(email, otp);

  return res.json({
    status: "unverified",
    message: "OTP resent. Please verify your email."
  });
}

// NEW USER
const hashedPassword = await bcrypt.hash(password, 10);
const otp = Math.floor(100000 + Math.random() * 900000).toString();

user = new User({
  email,
  password: hashedPassword,
  name,
  otp,
  otpExpiry: Date.now() + 10 * 60 * 1000,
  verified: false
});

await user.save();
await sendEmail(email, otp);

return res.json({
  status: "new",
  message: "OTP sent to email"
  });

    } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});




/**
 * =========================
 * VERIFY OTP
 * =========================
 */
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.verified) {
      return res.json({ message: "Account already verified" });
    }

    if (!user.otp || user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.verified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    res.json({ message: "Email verified successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * =========================
 * LOGIN
 * =========================
 */
router.post("/login", async (req, res) => {
  try {
   const { email, password } = req.body;


    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not registered" });
    }

    if (!user.verified) {
      return res
        .status(403)
        .json({ message: "Please verify your email first" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

   res.json({
  message: "Login successful",
  name: user.name || user.email.split("@")[0]
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
