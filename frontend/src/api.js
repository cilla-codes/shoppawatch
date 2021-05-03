import axios from 'axios';

const baseUrl = 'http://localhost:8000';
const products = 'api/v1/products/';
const addItem = 'api/v1/carts/add_item';
const updateItem = 'api/v1/carts/update_item';
const cart = 'api/v1/carts/get_cart';

axios.defaults.baseURL = baseUrl;

const api = {
  baseUrl,
  products,
  addItem,
  updateItem,
  cart
};

export default api;
