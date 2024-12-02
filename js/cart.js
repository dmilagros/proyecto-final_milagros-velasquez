import { getProductsByCart } from "./cartService.js";
import { getProductsById } from "./productService.js";

async function loadCart() {
  const cart = await getProductsByCart(5);

  const productListContainer = document.querySelector(".cart-items");
  productListContainer.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("cart-table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");
  let totalCost = 0;

  for (const item of cart.products) {
    const product = await getProductsById(item.productId);

    // calcular el total para este producto
    const productTotal = product.price * item.quantity;
    totalCost += productTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.title}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>$${productTotal.toFixed(2)}</td>
    `;
    tbody.appendChild(row);
  }

  productListContainer.appendChild(table);

  const totalElement = document.querySelector(".cart-total");
  totalElement.textContent = `$${totalCost.toFixed(2)}`;

  const checkoutButton = document.querySelector("#checkout-button");
  checkoutButton.addEventListener("click", () => {
    alert(`Gracias por tu compra. El total es $${totalCost.toFixed(2)}.`);
  });
}

loadCart();
