import express from "express";
import dotenv from "dotenv";
import connectDB from "./libs/database.js";
import productRoutes from "./routes/productRoutes.js";


dotenv.config();

await connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
