// Mobile theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    if (mobileThemeToggle) {
        // Sync with existing theme on load
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // Add click handler for mobile theme toggle
        mobileThemeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Update theme
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Sync with desktop theme icon if it exists
            const themeIcon = document.getElementById('theme-icon');
            if (themeIcon) {
                if (newTheme === 'dark') {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            }
        });
    }
});