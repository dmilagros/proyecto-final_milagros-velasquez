export async function getProductsById(productId = 1) {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data = await response.json();
  return data;
}
