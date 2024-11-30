import { createProductCard } from './productCard.js';
import { getCategories } from './categoryService.js';

/* categorías y productos por categorías */

async function loadCategories() {
  const categories = await getCategories();
  const categoryListContainer = document.querySelector('.category-list');
  categoryListContainer.innerHTML = '';

  categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('category-card');
    categoryCard.innerHTML = `<h5>${category}</h5>`;
    categoryCard.addEventListener('click', () => loadProductsByCategory(category));
    categoryListContainer.appendChild(categoryCard);
  });
}

async function loadProductsByCategory(category) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const products = await response.json();
  const productListContainer = document.querySelector('.product-list');
  productListContainer.innerHTML = '';

  products.forEach(product => {
    const productCard = createProductCard(product);
    productListContainer.appendChild(productCard);
  });
}

loadCategories();