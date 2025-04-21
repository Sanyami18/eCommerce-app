import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/superwoman-poster-with-flying-girl-red-cape_107791-8383.jpg?t=st=1745239454~exp=1745243054~hmac=6e3623e674353228435ee769f3c22ac944c985a238f362ffad10165ca495a7c5&w=1380",
      title: "New Collection",
      subtitle: "Discover our latest arrivals",
      buttonText: "Shop Now",
      accentColor: "#E53E3E", // Vibrant red
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-vector/cartoon-comic-thumbnail-template-background_530597-2512.jpg?semt=ais_hybrid&w=740",
      title: "Limited Edition",
      subtitle: "Exclusive items for true collectors",
      buttonText: "View Collection",
      accentColor: "#D69E2E", // Gold
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8A6Yvwesvi_ib3JqD6taFS4C6YgEEXMe5g&s",
      title: "Seasonal Sale",
      subtitle: "Up to 40% off selected items",
      buttonText: "View Offers",
      accentColor: "#38B2AC", // Teal
    },
  ];

  useEffect(() => {
    // Banner rotation interval
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        const mockProducts = [
          {
            id: 1,
            name: "Comic Theme ",
            price: 199.99,
            image:
              "https://i.pinimg.com/736x/d9/63/51/d96351a778553a9f9ffecfd135ec6180.jpg",
            category: "Electronics",
          },
          {
            id: 2,
            name: "Noir Hoodie",
            price: 249.99,
            image:
              "https://www.mydesignation.com/cdn/shop/files/dragon-hoodie-embroidered-537244.jpg?v=1732340639&width=750",
            category: "Winter collection",
          },
          {
            id: 3,
            name: "Super Heroes",
            price: 179.99,
            image: "https://m.media-amazon.com/images/I/716QEMZFv-S.jpg",
            category: "Apparel",
          },
          {
            id: 4,
            name: "Women's T-shirts",
            price: 699.99,
            image:
              "https://i.pinimg.com/736x/3a/04/fc/3a04fc9527986ba8a74badf0997a2681.jpg",
            category: "Woman's wear",
          },
        ];

        const mockCategories = [
          {
            id: 1,
            name: "Hoodies",
            image:
              "https://images.meesho.com/images/products/328304331/rdrrl_1200.jpg",
          },
          {
            id: 2,
            name: "Polo",
            image:
              "https://teelabs.in/wp-content/uploads/2021/02/polo-green-and-white-2-300x289.png",
          },
          {
            id: 3,
            name: "Comic",
            image:
              "https://i.pinimg.com/736x/fe/dc/73/fedc7389c157842481d64ea21e89c301.jpg",
          },
          {
            id: 4,
            name: "Marvel Universe",
            image:
              "https://i.pinimg.com/736x/d5/1e/ca/d51eca9f7e4c7e4490965b844463dd41.jpg",
          },
          {
            id: 5,
            name: "Printed Tshirt",
            image:
              "https://via.placeholder.com/200x200/555356/CDCBD6?text=Accessories",
          },
        ];

        setFeaturedProducts(mockProducts);
        setCategories(mockCategories);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => clearInterval(bannerInterval);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading our collection...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Banner with Rotation */}
      <section className="hero-section">
        <div className="banner-container">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`banner-slide ${
                index === currentBannerIndex ? "active" : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(16, 14, 15, 0.7), rgba(16, 14, 15, 0.7)), url(${banner.image})`,
                "--accent-color": banner.accentColor,
              }}
            >
              <div className="hero-content">
                <h1>{banner.title}</h1>
                <p>{banner.subtitle}</p>
                <div className="hero-buttons">
                  <Link to="/collection" className="btn btn-primary">
                    {banner.buttonText}
                  </Link>
                  <Link to="/about" className="btn btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="banner-indicators">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentBannerIndex ? "active" : ""
                }`}
                onClick={() => setCurrentBannerIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Collection</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <Link to={`/product/${product.id}`} className="btn btn-view">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-price">
                  ${product.price.toFixed(2)}
                </span>
                <button className="btn btn-add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <Link to="/collection" className="btn btn-outline">
            View All Products
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              className="category-card"
            >
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              We meticulously select materials and products that stand the test
              of time.
            </p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>
              Committed to eco-friendly practices from sourcing to packaging.
            </p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Constantly evolving to bring you the best in design and
              functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Join Our Community</h2>
          <p>
            Subscribe for exclusive offers and early access to new collections
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
