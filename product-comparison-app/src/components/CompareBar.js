import React from "react";

const CompareBar = ({ items, onRemove, onClear }) => {
  return (
    <div className="compare-bar">
      <h2>Selected for Comparison</h2>
      <p className="compare-note">You can compare up to <strong>3 products</strong></p>
      
      <div className="compare-items">
        {items.map((item) => (
          <div key={item.id} className="compare-item">
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <button onClick={() => onRemove(item.id)} title="Remove">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      
      <button onClick={onClear}>
        <i className="fas fa-times-circle"></i> Clear All
      </button>
    </div>
  );
};

export default CompareBar;
