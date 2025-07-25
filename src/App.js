import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import CompareBar from "./components/CompareBar";
import ComparisonTable from "./components/ComparisonTable";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import products from "./data/products";
import "./styles/styles.css";

const AppContent = () => {
  const { darkMode } = useTheme(); 

  const [compareItems, setCompareItems] = useState(() => {
    return JSON.parse(localStorage.getItem("compareItems")) || [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("compareItems", JSON.stringify(compareItems));
  }, [compareItems]);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleCompareToggle = (product) => {
    const exists = compareItems.find((p) => p.id === product.id);
    if (exists) {
      setCompareItems(compareItems.filter((p) => p.id !== product.id));
    } else if (compareItems.length < 3) {
      setCompareItems([...compareItems, product]);
    }
  };

  const clearAll = () => setCompareItems([]);
  const removeItem = (id) =>
    setCompareItems(compareItems.filter((p) => p.id !== id));

  return (
    <div className="app">
      <header>
        <h1>Product Comparison Tool</h1>
        <ThemeToggle />
      </header>

      <input
        type="text"
        placeholder="Search by name or brand"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ProductList
        products={products}
        compareItems={compareItems}
        onToggleCompare={handleCompareToggle}
        searchTerm={searchTerm}
      />

      {compareItems.length >= 2 && (
        <CompareBar
          items={compareItems}
          onRemove={removeItem}
          onClear={clearAll}
        />
      )}

      {compareItems.length >= 2 && (
        <ComparisonTable items={compareItems} onRemove={removeItem} />
      )}
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
