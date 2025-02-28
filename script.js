let cart = [];
let products = [
  { id: 1, name: "Nike Slim Shirt", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5742f317-d0c8-4d01-8a66-81d6f4bc73ca/NIKE+SB+ZOOM+BLAZER+LOW+PRO+GT.png", price: 120 },
  { id: 2, name: "Adidas Fit Shirt", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b24bc11-4ea0-4ee5-8d16-aa58b518475b/AIR+FORCE+1+%2707+FRESH.png", price: 100 },
  { id: 3, name: "Lacoste Free Shirt", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d7a4f70-4e83-4317-b01f-111b079bed16/NK+SB+ZM+BLAZER+LOW+QS.png", price: 220 },
  { id: 4, name: "Nike Slim Pant", image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6c07f915-3a5e-4586-a75c-78e3aecc402f/custom-nike-blazer-mid-77-shoes-by-you.png", price: 78 },
  { id: 5, name: "Nike Zoom Blazer Mid", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4abaf8d1-c95e-4404-ad8f-45a2e3e59437/NIKE+ZOOM+BLAZER+MID+QS.png", price: 65 },
];

// Toggle Cart Sidebar
function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("open");
}

// Close Cart
function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
}

// Add to Cart
function addToCart(id) {
  let product = products.find((p) => p.id === id);
  let cartItem = cart.find((p) => p.id === id);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

// Increment Quantity
function incrementQuantity(id) {
  let cartItem = cart.find((p) => p.id === id);
  if (cartItem) {
    cartItem.quantity++;
    updateCart();
  }
}

// Decrement Quantity
function decrementQuantity(id) {
  let cartItem = cart.find((p) => p.id === id);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
  } else {
    cart = cart.filter((p) => p.id !== id);
  }
  updateCart();
}

// Remove Item from Cart
function removeFromCart(id) {
  cart = cart.filter((p) => p.id !== id);
  updateCart();
}

// Clear Cart
function clearCart() {
  cart = [];
  updateCart();
}

// Sort Cart
function sortCart(order) {
  if (order === "asc") {
    cart.sort((a, b) => a.price - b.price);
  } else if (order === "desc") {
    cart.sort((a, b) => b.price - a.price);
  }
  updateCart();
}
document.querySelector(".cart-summary").innerHTML += `
        <button class="sort-btn" onclick="sortCart('asc')">Sort Low to High</button>
        <button class="sort-btn" onclick="sortCart('desc')">Sort High to Low</button>
        <button class="clear-btn" onclick="clearCart()">Clear Cart</button>
    `;

// Update Cart UI
function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let subtotal = 0;
  let totalItems = 0;
  cartItems.innerHTML = "";
  
  

  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
    totalItems += item.quantity;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="50">
        <p>${item.name}</p>
        <p>₹${item.price} x ${item.quantity}</p>
        <button class="increment-btn" onclick="incrementQuantity(${item.id})">+</button>
        <button class="decrement-btn" onclick="decrementQuantity(${item.id})" ${item.quantity === 1 ? "disabled" : ""}>-</button>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
  });

  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("cart-count").innerText = totalItems; 
  document.getElementById("cart-items-count").innerText = totalItems;

`<div class="cart-summary1">
<button class="sort-btn" onclick="sortCart('asc')">Sort Low to High</button>
  <button class="sort-btn" onclick="sortCart('desc')">Sort High to Low</button>
  <button class="clear-btn" onclick="clearCart()">Clear Cart</button>
</div>
  
`; 
 
}



// Load Products on Page Load
window.onload = function () {
  let productList = document.getElementById("product-list");
  products.forEach((product) => {
    productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" width="150">
        <p>${product.name}</p>
        <p>₹${product.price}</p>
        <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
};


document.getElementById("place").addEventListener("click", function () {
    document.getElementById("thank-you-modal").style.display = "block";
    document.getElementById("modal-overlay").style.display = "none";
    document.getElementById("cart-sidebar").classList.remove("open");
});

