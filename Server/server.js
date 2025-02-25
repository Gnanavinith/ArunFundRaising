require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 7000;
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/FundRaise")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Multer Setup for Image Uploads
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Mongoose Schema & Models
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const cartSchema = new mongoose.Schema({
  title: String,
  about1: String,
  companytype: String,
  amount: String,
  image: String,
});

const User = mongoose.model("User", userSchema);
const Cart = mongoose.model("Cart", cartSchema);

// ** User Registration Route **
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

// ** User Login Route **
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find User
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare Passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

// ** Middleware to Verify Token **
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// ** Protected Route Example **
app.get("/protected", verifyToken, async (req, res) => {
  res.status(200).json({ message: "Protected content", user: req.user });
});

// ** Add a New Startup **
app.post("/api/carts", upload.single("image"), async (req, res) => {
  try {
    const { title, about1, companytype, amount } = req.body;
    const image = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

    const newCart = new Cart({ title, about1, companytype, amount, image });
    await newCart.save();
    res.status(201).json({ message: "Startup added successfully", data: newCart });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

// ** Fetch all Startups **
app.get("/api/carts", async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

// ** Fetch a Single Startup by ID **
app.get("/api/carts/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(404).json({ message: "Startup not found" });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error fetching startup" });
  }
});

// ** Delete a Startup **
app.delete("/api/carts/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Startup deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting startup" });
  }
});

// ** Start Server **
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
