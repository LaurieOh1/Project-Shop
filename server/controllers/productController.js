import Product from "../models/Product.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    Create a new product
// @route   POST /api/products
// @access  Admin
export const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, image, stock, category, isFeatured } = req.body;

  const product = await Product.create({
    name,
    description,
    price,
    image,
    stock,
    category,
    isFeatured,
  });

  res.status(201).json(product);
});

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// @desc    Get a single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json(product);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, price, image, stock, category, isFeatured } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  product.name = name || product.name;
  product.description = description || product.description;
  product.price = price || product.price;
  product.image = image || product.image;
  product.stock = stock || product.stock;
  product.category = category || product.category;
  product.isFeatured = isFeatured ?? product.isFeatured;

  const updatedProduct = await product.save();
  res.status(200).json(updatedProduct);
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  await product.remove();
  res.status(200).json({ message: "Product deleted" });
});

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
export const getFeaturedProducts = asyncHandler(async (req, res) => {
  const featured = await Product.find({ isFeatured: true });
  res.status(200).json(featured);
});
