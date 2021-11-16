const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");

import { json } from "body-parser";
import consola from "consola";
import passport from "passport";
import morgan from "morgan";

import { notFound, errorHandler } from "./middlewares/asyncHandler";

import authApi from "./routes/auth";
import productApi from "./routes/products";
import userApi from "./routes/user";
import filesApi from "./routes/files";

const app = express();

connectDB();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(cors());
app.use(json());

app.use(passport.initialize());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 mins
//   max: 100,
// });
// app.use(limiter);

// Prevent http param pollution
app.use(hpp());

require("./middlewares/passport-middleware");



// app.get("/", (req, res) => {
//     res.status(200).json({ message: "Welcome to Node.js & Express" });
// });

app.use("/api/v1/auth", authApi);
app.use("/api/v1/products", productApi);
app.use("/api/v1/files", filesApi);
app.use("/api/v1/users", userApi);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});



app.use(notFound);
app.use(errorHandler);


app.listen(process.env.PORT || 5000, () => {
    consola.success(`Server running on port ${process.env.PORT}`);
});


// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
});
