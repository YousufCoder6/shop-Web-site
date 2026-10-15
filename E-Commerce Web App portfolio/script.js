const products = [
    { id: 1, name: "Wireless Headphones", price: 120, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Smart Watch", price: 85, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Minimalist Backpack", price: 60, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Running Shoes", price: 95, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" }
];

let cart = [];

const productGrid = document.getElementById("productGrid");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartCount = document.getElementById("cartCount");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Display Products
function displayProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Update Cart UI
function updateCart() {
    cartCount.innerText = cart.length;
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>$${item.price}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerText = total;
}

// Modal Open/Close
cartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
});

closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = "none";
    }
});

// Initialize
displayProducts();