document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.04)';
            navbar.style.background = 'rgba(248, 250, 252, 0.9)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(248, 250, 252, 0.85)';
        }
    });
});
