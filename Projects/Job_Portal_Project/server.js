// API Documentation
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc"; // Correct import statement

// Packages imports
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

// Security packages
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

// Files imports
import connectDB from "./config/db.js";

// Routes import
import testRoutes from "./routes/test_routes.js";
import authRoutes from "./routes/auth_routes.js";
///import errroMiddelware from "./middlewares/errroMiddleware.js"; // Corrected spelling
// import jobsRoutes from "./routes/jobsRoute.js";
// import userRoutes from "./routes/userRoutes.js";

// Dot ENV config
dotenv.config();

// MongoDB connection
connectDB();

// Swagger API config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Portal Application",
      description: "Node Expressjs Job Portal Application",
    },
    servers: [
      {
        url: "https://nodejs-job-portal-app.onrender.com", // Ensure this is correct
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options); // Corrected to use swaggerJsdoc

// Rest object
const app = express();

// Middlewares
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/job", jobsRoutes);

// Home route root for Swagger API documentation
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs)); // Corrected path and usage

// Validation middleware
//app.use(errroMiddelware);

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`.bgCyan.white
  );
});
