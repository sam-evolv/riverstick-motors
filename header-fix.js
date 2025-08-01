// Desktop header visibility fix
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    // Ensure header is always visible on desktop
    if (window.innerWidth > 1024) {
        header.style.opacity = '1';
        header.style.visibility = 'visible';
        header.style.display = 'block';
    }
    
    // Override any scroll-based hiding on desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            header.style.opacity = '1';
            header.style.visibility = 'visible';
            header.style.display = 'block';
        }
    });
});