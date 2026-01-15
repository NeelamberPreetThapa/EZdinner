// Fade-in Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

// Select elements to animate
document.querySelectorAll('.fade-in').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// --- Modal Logic ---

const modal = document.getElementById('bookingModal');
const restaurantNameSpan = document.getElementById('selectedRestaurant');
let currentPrice = 100; // Base deposit price

function openModal(restaurantName) {
    modal.style.display = 'flex';
    restaurantNameSpan.innerText = restaurantName;
    // Reset price logic on open
    currentPrice = 100;
    document.getElementById('priceDisplay').innerText = `$${currentPrice}.00`;
    document.getElementById('couponMessage').innerText = "";
    document.getElementById('couponInput').value = "";
}

function closeModal() {
    modal.style.display = 'none';
}

// Close modal if clicking outside box
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// --- Coupon Logic ---

function applyCoupon() {
    const input = document.getElementById('couponInput').value.toUpperCase().trim();
    const message = document.getElementById('couponMessage');
    const priceDisplay = document.getElementById('priceDisplay');
    
    // Simulate valid coupons
    if (input === "VELVET20") {
        currentPrice = 80; // Discounted
        message.style.color = "#4BB543"; // Success Green
        message.innerText = "Coupon Applied: 20% Off Deposit";
        priceDisplay.innerText = `$${currentPrice}.00`;
    } else if (input === "") {
        message.style.color = "#ff4444";
        message.innerText = "Please enter a code.";
    } else {
        message.style.color = "#ff4444"; // Error Red
        message.innerText = "Invalid Coupon Code.";
        currentPrice = 100; // Reset
        priceDisplay.innerText = `$${currentPrice}.00`;
    }
}

// Handle Form Submit
document.getElementById('reservationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.querySelector('.confirm-btn');
    btn.innerText = "Processing...";
    
    setTimeout(() => {
        alert("Reservation Confirmed! A confirmation email has been sent.");
        closeModal();
        btn.innerText = "Complete Reservation";
    }, 1500);
});
