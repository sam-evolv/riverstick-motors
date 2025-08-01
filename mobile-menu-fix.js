// Mobile menu fix for all devices including iPhones
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navCenter = document.getElementById('nav-center');
    
    // Ensure menu starts in correct state
    navMenu.style.display = 'flex';
    navCenter.style.display = 'flex';
    
    // Remove any conflicting event listeners by cloning
    const newNavToggle = navToggle.cloneNode(true);
    navToggle.parentNode.replaceChild(newNavToggle, navToggle);
    
    // Add reliable click handler
    newNavToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = navMenu.classList.contains('nav-menu-active');
        
        if (!isActive) {
            // Opening - ensure visible before animation
            navMenu.style.display = 'flex';
            navCenter.style.display = 'flex';
            
            // Force reflow for Safari/iOS
            void navMenu.offsetHeight;
            void navCenter.offsetHeight;
            
            // Add active classes
            navMenu.classList.add('nav-menu-active');
            navCenter.classList.add('nav-center-active');
            newNavToggle.classList.add('nav-toggle-active');
        } else {
            // Closing
            navMenu.classList.remove('nav-menu-active');
            navCenter.classList.remove('nav-center-active');
            newNavToggle.classList.remove('nav-toggle-active');
        }
        
        newNavToggle.setAttribute('aria-expanded', !isActive);
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-menu-active');
            navCenter.classList.remove('nav-center-active');
            document.getElementById('nav-toggle').classList.remove('nav-toggle-active');
        });
    });
});