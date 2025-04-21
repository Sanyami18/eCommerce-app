import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./collectionPage.css";

const collectionPage = () => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Simulate API fetch
    const fetchCollections = async () => {
      try {
        // Mock data - in a real app you would fetch from your backend
        const mockCollections = [
          {
            id: 1,
            name: "Minimal Plains",
            items: 24,
            image:
              "https://i.pinimg.com/736x/b9/9a/c7/b99ac705e7addd15c07b8a9c2e108990.jpg",
            category: "apparel",
          },
          {
            id: 2,
            name: "Sci-Fi Collection",
            items: 18,
            image:
              "https://i.pinimg.com/736x/81/4d/73/814d73ae1c56e80a026b9b0e7685fdb4.jpg",
            category: "apparel",
          },
          {
            id: 3,
            name: "Comic Themes",
            items: 32,
            image:
              "https://i.pinimg.com/736x/fe/dc/73/fedc7389c157842481d64ea21e89c301.jpg",
            category: "home",
          },
          {
            id: 4,
            name: "Marvel Universe",
            items: 15,
            image:
              "https://i.pinimg.com/736x/d5/1e/ca/d51eca9f7e4c7e4490965b844463dd41.jpg",
            category: "accessories",
          },
          {
            id: 5,
            name: "Timeless Classics",
            items: 27,
            image:
              "https://i.pinimg.com/736x/37/01/43/3701439ac4ceb0a64f5ed423d8e1cd59.jpg",
            category: "apparel",
          },
          {
            id: 6,
            name: "Print & Graphics",
            items: 21,
            image:
              "https://i.pinimg.com/736x/6e/c9/79/6ec9798bd67a05359456e88969d6337d.jpg",
            category: "accessories",
          },
        ];

        setCollections(mockCollections);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching collections:", error);
        setIsLoading(false);
      }
    };

    fetchCollections();
  }, []);

  const filteredCollections =
    activeFilter === "all"
      ? collections
      : collections.filter(
          (collection) => collection.category === activeFilter
        );

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading collections...</p>
      </div>
    );
  }

  return (
    <div className="collection-page">
      <section className="collection-hero">
        <div className="hero-content">
          <h1>Our Collections</h1>
          <p>Curated selections for the discerning individual</p>
        </div>
      </section>

      <section className="collection-main">
        <div className="container">
          <div className="collection-filters">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Collections
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "apparel" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("apparel")}
            >
              Apparel
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "accessories" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("accessories")}
            >
              Accessories
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "home" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("home")}
            >
              Home
            </button>
          </div>

          <div className="collection-grid">
            {filteredCollections.map((collection) => (
              <div key={collection.id} className="collection-card">
                <Link
                  to={`/collection/${collection.id}`}
                  className="collection-link"
                >
                  <div className="collection-image">
                    <img src={collection.image} alt={collection.name} />
                    <div className="collection-overlay">
                      <span>View Collection</span>
                    </div>
                  </div>
                  <div className="collection-info">
                    <h3>{collection.name}</h3>
                    <p>{collection.items} items</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default collectionPage;
