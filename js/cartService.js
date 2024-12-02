export async function getProductsByCart(cartId = 1) {
  const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`);
  const data = await response.json();
  return data;
}
