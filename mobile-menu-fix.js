// Mobile menu fix for scroll position 0
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navCenter = document.getElementById('nav-center');
    
    // Override the existing toggle behavior with a more stable approach
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle classes
        const isActive = navMenu.classList.contains('nav-menu-active');
        
        if (!isActive) {
            // Opening the menu
            navMenu.classList.add('nav-menu-active');
            navCenter.classList.add('nav-center-active');
            navToggle.classList.add('nav-toggle-active');
            
            // Force a tiny scroll to ensure proper rendering
            if (window.scrollY === 0) {
                window.scrollTo(0, 1);
                setTimeout(() => window.scrollTo(0, 0), 10);
            }
        } else {
            // Closing the menu
            navMenu.classList.remove('nav-menu-active');
            navCenter.classList.remove('nav-center-active');
            navToggle.classList.remove('nav-toggle-active');
        }
        
        navToggle.setAttribute('aria-expanded', !isActive);
    });
});