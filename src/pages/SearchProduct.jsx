import React, { useState } from "react";

// Mock product data covering T-shirt types and themes
const products = [
  {
    id: 1,
    name: "Spider-Man Oversized Tee",
    type: "Oversized",
    theme: "Marvel Universe",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1621252179027-94459d278661?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Batman Acid Wash Tee",
    type: "Acid Wash",
    theme: "DC Comics",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Avengers Graphic Tee",
    type: "Graphic Printed",
    theme: "Marvel Universe",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ff?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Superman Solid Tee",
    type: "Solid Color",
    theme: "Classic Comics",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558f5d8b4?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "Iron Man Polo Tee",
    type: "Polo T-Shirts",
    theme: "Marvel Universe",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    name: "Wonder Woman Sleeveless",
    type: "Sleeveless",
    theme: "DC Comics",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1570299437560-f9bed3e8e413?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 7,
    name: "Goku Long Sleeve",
    type: "Long Sleeve",
    theme: "Anime Superheroes",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 8,
    name: "Captain America Henley",
    type: "Henley",
    theme: "Marvel Universe",
    price: 31.99,
    image:
      "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 9,
    name: "Deadpool Hooded Tee",
    type: "Hooded",
    theme: "Marvel Universe",
    price: 37.99,
    image:
      "https://images.unsplash.com/photo-1599059813006-7ad16e452c82?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 10,
    name: "Harley Quinn Crop Top",
    type: "Crop Tops",
    theme: "DC Comics",
    price: 26.99,
    image:
      "https://images.unsplash.com/photo-1583266283467-d83e26f4b931?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 11,
    name: "Star Wars Oversized Tee",
    type: "Oversized",
    theme: "Sci-Fi & Fantasy",
    price: 30.99,
    image:
      "https://images.unsplash.com/photo-1570824104453-508191d7b1a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 12,
    name: "Link Graphic Tee",
    type: "Graphic Printed",
    theme: "Video Game Characters",
    price: 28.99,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
  },
];

// SearchBar Component
function SearchBar({ onSearch }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Search T-Shirts by Name or Theme..."
        className="w-full p-3 rounded-lg bg-gray-800 text-white border-2 border-white focus:outline-none focus:border-red-500 comic-text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

// ProductCard Component
function ProductCard({ product }) {
  return (
    <div className="comic-card bg-gray-900 rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg comic-text">{product.name}</h3>
        <p className="text-sm text-gray-400">
          {product.type} | {product.theme}
        </p>
        <p className="text-xl font-bold text-red-500">
          ${product.price.toFixed(2)}
        </p>
        <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded comic-text hover:bg-red-700">
          View Details
        </button>
      </div>
    </div>
  );
}

// ProductSearchPage Component
function Search aProduct() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.theme.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <h1 className="text-4xl comic-text text-center mb-8">
        Comic T-Shirt Shop
      </h1>
      <SearchBar onSearch={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchProduct;
