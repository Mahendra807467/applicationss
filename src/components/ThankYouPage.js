import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ThankYouPage.css';

const ThankYouPage = () => {
  const { productName } = useParams();

  return (
    <div className="thank-you">
      <h1>Thank you for your interest in {productName}!</h1>
      <p>We appreciate your time.</p>
    </div>
  );
};

export default ThankYouPage;