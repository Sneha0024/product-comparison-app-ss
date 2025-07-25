import React from 'react';

const ProductCard = ({ product, onToggle, isSelected, isDisabled }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>₹{product.price.toLocaleString()}</p>
      <ul>
        {product.features.map((f, i) => <li key={i}> {f}</li>)}
      </ul>

      <button
        onClick={onToggle}
        disabled={isDisabled}
        className={isDisabled ? "disabled" : ""}
        title={isDisabled ? "You can only compare up to 3 products" : ""}
      >
        {isSelected ? "Remove from Compare" : "Add to Compare"}
      </button>
    </div>
  );
};

export default ProductCard;
