import React, { useState } from "react";
import { FiShoppingCart, FiHeart, FiStar, FiChevronLeft } from "react-icons/fi";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [activeImage, setActiveImage] = useState(0);

  // Mock product data - in a real app you would fetch this based on the ID
  const product = {
    id: 1,
    name: "Premium Noir Hoodie",
    price: 89.99,
    description:
      "Our signature hoodie crafted from premium organic cotton with a luxurious fleece interior. Designed for comfort and style with subtle Noir branding.",
    details: [
      "100% Organic Cotton",
      "Reinforced stitching",
      "Kangaroo pocket",
      "Adjustable drawstrings",
      "Machine wash cold",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "Navy"],
    images: [
      "https://www.mydesignation.com/cdn/shop/files/dragon-hoodie-embroidered-537244.jpg?v=1732340639&width=750",
      "https://www.mydesignation.com/cdn/shop/files/dragon-hoodie-embroidered-932400.jpg?v=1732340639&width=750",
      "https://www.mydesignation.com/cdn/shop/files/dragon-hoodie-embroidered-412176.jpg?v=1732340639&width=750",
    ],
    reviews: [
      {
        id: 1,
        author: "Alex Johnson",
        rating: 5,
        date: "2023-05-15",
        comment:
          "Absolutely love this hoodie! The quality is exceptional and it fits perfectly.",
      },
      {
        id: 2,
        author: "Sam Wilson",
        rating: 4,
        date: "2023-04-22",
        comment:
          "Great hoodie, very comfortable. Only wish it came in more colors.",
      },
    ],
    rating: 4.5,
    reviewCount: 42,
  };

  const handleAddToCart = () => {
    // Cart functionality would go here
    console.log(
      `Added ${quantity} ${product.name} (size ${selectedSize}) to cart`
    );
  };

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <a href="/collection" className="breadcrumb-link">
          <FiChevronLeft className="icon" /> Back to Collection
        </a>
      </div>

      <div className="product-container">
        {/* Product Images */}
        <div className="product-images">
          <div className="thumbnail-container">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${activeImage === index ? "active" : ""}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="main-image">
            <img src={product.images[activeImage]} alt={product.name} />
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`star ${
                    i < Math.floor(product.rating) ? "filled" : ""
                  }`}
                />
              ))}
            </div>
            <span className="review-count">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="product-price">${product.price.toFixed(2)}</div>

          <p className="product-description">{product.description}</p>

          <div className="product-details">
            <h3>Details</h3>
            <ul>
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Size Selector */}
          <div className="size-selector">
            <h3>Size</h3>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-selector">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <FiShoppingCart className="cart-icon" />
            Add to Cart
          </button>

          {/* Wishlist */}
          <button className="wishlist-btn">
            <FiHeart className="heart-icon" />
            Add to Wishlist
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Customer Reviews</h2>

        <div className="review-summary">
          <div className="average-rating">
            <span className="rating-value">{product.rating}</span>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`star ${
                    i < Math.floor(product.rating) ? "filled" : ""
                  }`}
                />
              ))}
            </div>
            <span className="total-reviews">{product.reviewCount} reviews</span>
          </div>
        </div>

        <div className="review-list">
          {product.reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <span className="review-author">{review.author}</span>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`star ${i < review.rating ? "filled" : ""}`}
                    />
                  ))}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>

        <button className="view-all-reviews">View All Reviews</button>
      </div>
    </div>
  );
};

export default ProductDetail;
