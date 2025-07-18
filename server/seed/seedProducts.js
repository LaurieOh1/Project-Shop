import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js"; 

dotenv.config();

const products = [
  {
    name: "Amur Nourishing Shampoo",
    description: "Gently cleanses while hydrating dry and textured hair. Enriched with coconut oil and shea butter to reduce breakage and enhance shine.",
    price: 12.99,
    image: "client/src/assets/Shampoo.png",
    stock: 50,
    category: "Shampoo",
    isFeatured: true,
  },
  {
    name: "Amur Hydrating Conditioner",
    description: "Detangles and deeply moisturizes curls and coils. Formulated with argan oil and aloe vera for softness and manageability.",
    price: 13.99,
    image: "client/src/assets/conditioner.png",
    stock: 50,
    category: "Conditioner",
    isFeatured: true,
  },
  {
    name: "Amur Repairing Hair Mask",
    description: "Restores strength and elasticity with a blend of avocado oil and honey. Ideal for damaged or color-treated Afro hair.",
    price: 16.99,
    image: "client/src/assets/Hair_mask.png",
    stock: 30,
    category: "Cream",
    isFeatured: false,
  },
  {
    name: "Amur Scalp Massage Brush",
    description: "Silicone bristles stimulate blood flow and exfoliate the scalp, promoting healthy hair growth and reducing buildup.",
    price: 7.99,
    image: "url-to-scalp-brush-image",
    stock: 100,
    category: "Accessory",
    isFeatured: false,
  },
  {
    name: "Amur Duo: Shampoo & Conditioner",
    description: "A perfect pair for Afro-textured hair — cleanse and hydrate with our bestselling combo at a special price.",
    price: 24.99,
    image: "client/src/assets/duo_shampoo_conditionner.png",
    stock: 40,
    category: "Other",
    isFeatured: true,
  },
    {
    name: "Amur Scalp Revive Serum",
    description: "A lightweight serum that soothes dry, itchy scalp and promotes growth. Infused with peppermint, castor oil, and tea tree extract.",
    price: 14.99,
    image: "client/src/assets/Serum.png",
    stock: 35,
    category: "Oil",
    isFeatured: true,
  },
  {
    name: "Amur Curl Defining Gel",
    description: "Defines curls without flaking or crunch. Ideal for twist-outs, wash-n-go styles, and frizz control in humid weather.",
    price: 11.99,
    image: "client/src/assets/Gel.png",
    stock: 45,
    category: "Cream",
    isFeatured: true,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedProducts();
