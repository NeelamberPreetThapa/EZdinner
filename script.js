document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 3. Simple Form Handling (Prevent reload for demo)
    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        const originalText = btn.innerText;
        
        btn.innerText = "Request Sent";
        btn.style.backgroundColor = "#fff";
        btn.style.color = "#000";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "transparent";
            btn.style.color = "var(--gold)";
            form.reset();
            alert("Thank you. Your reservation request has been received.");
        }, 2000);
    });
});
