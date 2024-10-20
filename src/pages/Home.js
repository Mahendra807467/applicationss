import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import AddToCartModal from '../components/AddToCartModal';
import '../styles/Home.css';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 100, image: '/path/to/image1' },
  { id: 2, name: 'Product 2', price: 150, image: '/path/to/image2' },
  // Add more mock products
];

const Home = () => {
  const [cartModalProduct, setCartModalProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const paginatedProducts = mockProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleAddToCart = (product) => {
    setCartModalProduct(product);
  };

  const handleCloseModal = () => {
    setCartModalProduct(null);
  };

  return (
    <div>
      <Header />
      <div className="product-list">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(mockProducts.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
      {cartModalProduct && (
        <AddToCartModal
          product={cartModalProduct}
          onClose={handleCloseModal}
          onConfirm={() => {
            handleCloseModal();
            // Handle add to cart logic here
          }}
        />
      )}
    </div>
  );
};

export default Home;