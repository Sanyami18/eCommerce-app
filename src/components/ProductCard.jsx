import { FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, type = "featured" }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-yellow-500 ${
          i < rating ? "opacity-100" : "opacity-30"
        }`}
      >
        ★
      </span>
    ));
  };

  if (type === "new-arrivals") {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden group relative h-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold mb-1">{product.name}</h3>
          <p className="text-purple-400 font-semibold mb-4">${product.price}</p>
          <button className="btn-primary">VIEW DETAILS</button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card">
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
            <FiHeart className="text-gray-200 hover:text-purple-500" />
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
            <FiShoppingCart className="text-gray-200 hover:text-purple-500" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="text-purple-400 font-bold">${product.price}</span>
        </div>
        {product.description && (
          <p className="text-gray-400 text-sm mb-2">{product.description}</p>
        )}
        {product.rating && (
          <div className="flex items-center mb-3">
            {renderStars(product.rating)}
            <span className="text-gray-400 text-sm ml-2">
              ({product.rating})
            </span>
          </div>
        )}
        <button className="w-full bg-gray-800 hover:bg-purple-600 text-white py-2 rounded transition">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
