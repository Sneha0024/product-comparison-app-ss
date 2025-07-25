import galaxy from '../assets/galaxy.jpg';
import iphone from '../assets/iphone.jpg';
import oneplus from '../assets/oneplus.jpg';
import pixel from '../assets/pixel.jpg';
import xperia from '../assets/xperia.jpg';
import mi from '../assets/mi.jpg';

const products = [
  {
    id: 1,
    name: "Galaxy S21",
    brand: "Samsung",
    price: 59999,
    features: ["6.2 inch Display", "4000mAh Battery", "128GB Storage"],
    image: galaxy
  },
  {
    id: 2,
    name: "iPhone 13",
    brand: "Apple",
    price: 69999,
    features: ["6.1 inch Display", "A15 Bionic", "128GB Storage"],
    image: iphone
  },
  {
    id: 3,
    name: "OnePlus 9",
    brand: "OnePlus",
    price: 49999,
    features: ["6.55 inch Display", "4500mAh Battery", "128GB Storage"],
    image: oneplus
  },
  {
    id: 4,
    name: "Pixel 6",
    brand: "Google",
    price: 59999,
    features: ["6.4 inch Display", "Tensor Chip", "128GB Storage"],
    image: pixel
  },
  {
    id: 5,
    name: "Xperia 5",
    brand: "Sony",
    price: 54999,
    features: ["6.1 inch Display", "Snapdragon 865", "128GB Storage"],
    image: xperia
  },
  {
    id: 6,
    name: "Mi 11X",
    brand: "Xiaomi",
    price: 29999,
    features: ["6.67 inch Display", "4520mAh Battery", "128GB Storage"],
    image: mi
  }
];

export default products;
