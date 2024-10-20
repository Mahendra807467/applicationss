import React from 'react';
import { Link, useLocation } from 'react';
import '../styles/ThankYou.css';

const ThankYou = () => {
  const location = useLocation();
  const { productName } = location.state || { productName: 'the product' };

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <h1>Thank You!</h1>
        <p>Thank you for your interest in {productName}!</p>
        <Link to="/" className="back-to-home">
          Back to Product List
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;