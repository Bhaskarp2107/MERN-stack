const services = [
  {
    name: "Wash & Fold",
    price: 150,
    image: "https://images.unsplash.com/photo-1581578017426-a94e8f6f63f8"
  },
  {
    name: "Ironing",
    price: 70,
    image: "https://images.unsplash.com/photo-1606603245637-c8d15c8a92a3"
  },
  {
    name: "Dry Cleaning",
    price: 200,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
  }
];

let currentIndex = 0;
let cart = [];
let total = 0;

const img = document.getElementById("service-img");
const nameEl = document.getElementById("service-name");
const priceEl = document.getElementById("service-price");
const cartEl = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

function displayService(index) {
  const s = services[index];
  img.src = s.image;
  nameEl.textContent = s.name;
  priceEl.textContent = "₹" + s.price;
}

function updateCart() {
  cartEl.innerHTML = "";
  if (cart.length === 0) {
    cartEl.innerHTML = "No items added yet.";
    total = 0;
  } else {
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      cartEl.appendChild(li);
    });
    total = cart.reduce((sum, item) => sum + item.price, 0);
  }
  totalEl.textContent = total;
}

document.getElementById("add-btn").addEventListener("click", () => {
  cart.push(services[currentIndex]);
  updateCart();
});

document.getElementById("skip-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % services.length;
  displayService(currentIndex);
});

document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Please add at least one service to book.");
    return;
  }
  alert("Booking Successful!\nTotal Amount: ₹" + total);
  cart = [];
  updateCart();
  document.getElementById("booking-form").reset();
});

// Initial load
displayService(currentIndex);
updateCart();
