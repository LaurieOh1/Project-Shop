import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center py-10">Loading product...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="w-full">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-auto object-contain"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">€{product.price}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
        <p className="text-sm text-gray-500 mb-4">
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
