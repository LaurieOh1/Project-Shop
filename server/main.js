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
import path from "path";
const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
