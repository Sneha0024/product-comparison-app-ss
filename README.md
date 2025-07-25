# Product Comparison App

A modern, responsive React application that allows users to **search, filter, and compare up to 3 products side-by-side** with a beautiful UI, dark mode support, and usability enhancements and more.

---

## Setup Instructions

Clone the Repository

```bash
git clone https://github.com/Sneha0024/product-comparison-app-ss.git
cd product-comparison-app

npm install

npm start

## Features

Search & Filter: Find products by name or brand in real time.

Product Cards: Clean, informative cards with image, name, brand, price, and features.

Add to Compare: Compare up to 3 products side-by-side.

Limit Warning: Disables "Add to Compare" when 3 items are already selected.

Remove/Clear Comparison: Remove individual products or clear all with one click.

Dark Mode: Polished dark theme for comfortable viewing.

Responsive UI: Works great on mobile, tablet, and desktop.

State Persistence: Your selected compare items remain until you refresh (can be extended via localStorage).


##Assumptions

Product data is loaded statically from a local data.js file.

Maximum 3 products can be compared at once.

Product features are stored in an array called features.

Images are stored under src/assets/ with appropriate filenames.

If a product is already selected, clicking the button removes it.

Button disables guide the user clearly on comparison limits.

## Tech Stack

React JS

CSS3 (with dark/light mode support)

Font Awesome (for icons)


