import {products} from '../data/products.js';

let currentIndex = 0;

function displayProductById(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) {
      console.error('Product not found');
      return;
  }
  const productDisplay = document.querySelector('.item-info-page');

  productDisplay.innerHTML = `
    <div class="product-info-container">
      <img src="${product.image}" alt="${product.name}" class="product-image" style="max-width: 400px; z-index: 1; left: 0px; top: 0px;">
      <div class="product-info">
        <div class="product-info-1">
          <h2 class="product-name" style="margin-top: 0px">${product.name}</h2>
          <div class="description">
            ${product.description}
          </div>
        </div>
      <div class="product-info-2">
        <h3>Stats</h3>
        <div class="Stats">${product.stats}</div>
      </div>
    </div>
  `;
}

function getProductIDFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id'); // 'id' should match the query parameter name used in the grid page URLs
}

// Initial display based on the product ID from the URL
const productId = getProductIDFromURL();
if (productId) {
  displayProductById(productId);
} else {
  console.error('No product ID provided in the URL');
}
