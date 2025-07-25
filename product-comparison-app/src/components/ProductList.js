import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Toast from "./Toast";

const ProductList = ({ products, compareItems, onToggleCompare, searchTerm }) => {
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleToggle = (product) => {
    const alreadySelected = compareItems.some(p => p.id === product.id);

    if (!alreadySelected && compareItems.length >= 3) {
      showToast("You can only compare up to 3 products.");
      return;
    }

    onToggleCompare(product);
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="product-list">
      {filtered.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={compareItems.some((p) => p.id === product.id)}
          isDisabled={!compareItems.some((p) => p.id === product.id) && compareItems.length >= 3}
          onToggle={() => handleToggle(product)}
        />
      ))}
    </div>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
};

export default ProductList;
