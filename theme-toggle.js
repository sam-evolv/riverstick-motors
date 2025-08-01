// Mobile theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');
    
    if (mobileThemeToggle && mobileThemeIcon) {
        // Sync with existing theme on load
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        
        // Set initial icon state
        if (currentTheme === 'dark') {
            mobileThemeIcon.classList.remove('fa-moon');
            mobileThemeIcon.classList.add('fa-sun');
        }
        
        // Add click handler for mobile theme toggle
        mobileThemeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Update theme
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update mobile icon
            if (newTheme === 'dark') {
                mobileThemeIcon.classList.remove('fa-moon');
                mobileThemeIcon.classList.add('fa-sun');
            } else {
                mobileThemeIcon.classList.remove('fa-sun');
                mobileThemeIcon.classList.add('fa-moon');
            }
            
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