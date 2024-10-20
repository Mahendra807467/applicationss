import React from 'react';
import '../styles/AddToCartModal.css';

const AddToCartModal = ({ product, onClose, onConfirm }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirm Add to Cart</h2>
        <p>{product.name}</p>
        <p>${product.price}</p>
        <button onClick={onConfirm}>Add to Cart</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddToCartModal;