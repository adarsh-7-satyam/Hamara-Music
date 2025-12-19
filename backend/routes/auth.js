const sendEmail = require("../utils/sendEmail");
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save user
    const user = new User({
      email,
      password: hashedPassword,
      otp,
      otpExpires: Date.now() + 5 * 60 * 1000, // 5 minutes
    });

    await user.save();

    await sendEmail(email, otp);


    res.status(201).json({
      message: "Signup successful. OTP sent to email (console for now)",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not registered" });
    }

    // Check if user is verified
    if (!user.verified) {
      return res.status(400).json({ message: "Please verify your email first" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
