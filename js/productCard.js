export function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;

  const title = document.createElement("h3");
  title.textContent = product.title;

  const description = document.createElement("p");
  description.textContent = product.description;

  const price = document.createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;

  const button = document.createElement("button");
  button.textContent = "Agregar al carrito";
  button.addEventListener("click", () => addToCart(product));

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(button);

  return card;
}

async function addToCart(product) {

  const info = {
    userId: 5,
    date: "2020-02-03",
    products: [{ productId: product.id, quantity: 1 }],
  };

  await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info),
  });
  alert("Producto agregado al carrito");
}
