/**
 * Universal Device Scaling Mechanism
 * Ensures perfect scaling across all devices and viewports
 */

(function() {
    'use strict';

    // Device detection and scaling configuration
    const DeviceScaler = {
        // Viewport breakpoints
        breakpoints: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536
        },

        // Initialize the scaling system
        init() {
            this.setViewportMeta();
            this.detectDevice();
            this.applyScaling();
            this.handleOrientation();
            this.setupEventListeners();
            this.optimizeForTouch();
        },

        // Set optimal viewport meta tag
        setViewportMeta() {
            let viewport = document.querySelector('meta[name="viewport"]');
            if (!viewport) {
                viewport = document.createElement('meta');
                viewport.name = 'viewport';
                document.head.appendChild(viewport);
            }
            
            // Optimal viewport settings for all devices
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover';
        },

        // Detect device characteristics
        detectDevice() {
            const ua = navigator.userAgent.toLowerCase();
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;
            
            // Store device info
            this.device = {
                isIOS: /iphone|ipad|ipod/.test(ua),
                isAndroid: /android/.test(ua),
                isMobile: width <= 768,
                isTablet: width > 768 && width <= 1024,
                isDesktop: width > 1024,
                isRetina: dpr > 1,
                pixelRatio: dpr,
                width: width,
                height: height,
                orientation: width > height ? 'landscape' : 'portrait'
            };

            // Add device class to body
            document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
            if (this.device.isMobile) {
                document.body.classList.add('device-mobile');
            } else if (this.device.isTablet) {
                document.body.classList.add('device-tablet');
            } else {
                document.body.classList.add('device-desktop');
            }
        },

        // Apply dynamic scaling based on viewport
        applyScaling() {
            const root = document.documentElement;
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            
            // Calculate base font size for rem units
            let baseFontSize = 16;
            
            // Adjust base font size based on viewport width
            if (vw < 375) {
                baseFontSize = 14;
            } else if (vw >= 375 && vw < 414) {
                baseFontSize = 15;
            } else if (vw >= 414 && vw < 768) {
                baseFontSize = 16;
            } else if (vw >= 768 && vw < 1024) {
                baseFontSize = 17;
            } else if (vw >= 1024 && vw < 1440) {
                baseFontSize = 18;
            } else {
                baseFontSize = 19;
            }

            // Apply font size to html element
            root.style.fontSize = baseFontSize + 'px';

            // Set CSS custom properties for dynamic scaling
            root.style.setProperty('--vw', vw + 'px');
            root.style.setProperty('--vh', vh + 'px');
            root.style.setProperty('--vmin', Math.min(vw, vh) + 'px');
            root.style.setProperty('--vmax', Math.max(vw, vh) + 'px');
            
            // Safe area insets for modern devices
            const safeAreaTop = getComputedStyle(root).getPropertyValue('--sat') || '0px';
            const safeAreaBottom = getComputedStyle(root).getPropertyValue('--sab') || '0px';
            root.style.setProperty('--safe-area-top', safeAreaTop);
            root.style.setProperty('--safe-area-bottom', safeAreaBottom);
        },

        // Handle orientation changes
        handleOrientation() {
            const orientation = window.matchMedia('(orientation: portrait)');
            const updateOrientation = () => {
                document.body.classList.toggle('orientation-portrait', orientation.matches);
                document.body.classList.toggle('orientation-landscape', !orientation.matches);
                this.applyScaling();
            };
            
            updateOrientation();
            orientation.addListener(updateOrientation);
        },

        // Setup event listeners
        setupEventListeners() {
            let resizeTimer;
            
            // Debounced resize handler
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                document.body.classList.add('is-resizing');
                
                resizeTimer = setTimeout(() => {
                    this.detectDevice();
                    this.applyScaling();
                    document.body.classList.remove('is-resizing');
                }, 250);
            });

            // Handle zoom events
            window.addEventListener('gesturestart', (e) => {
                e.preventDefault();
            });

            // Visual viewport changes (for mobile keyboards)
            if ('visualViewport' in window) {
                window.visualViewport.addEventListener('resize', () => {
                    this.handleKeyboard();
                });
            }
        },

        // Handle mobile keyboard appearance
        handleKeyboard() {
            const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
            const fullVh = window.screen.height;
            const keyboardHeight = fullVh - vh;
            
            document.documentElement.style.setProperty('--keyboard-height', keyboardHeight + 'px');
            document.body.classList.toggle('keyboard-visible', keyboardHeight > 100);
        },

        // Optimize for touch devices
        optimizeForTouch() {
            if ('ontouchstart' in window) {
                document.body.classList.add('touch-device');
                
                // Prevent double-tap zoom
                let lastTouchEnd = 0;
                document.addEventListener('touchend', (e) => {
                    const now = Date.now();
                    if (now - lastTouchEnd <= 300) {
                        e.preventDefault();
                    }
                    lastTouchEnd = now;
                }, false);

                // Add touch feedback
                document.addEventListener('touchstart', (e) => {
                    if (e.target.matches('button, a, .btn')) {
                        e.target.classList.add('touch-active');
                    }
                });

                document.addEventListener('touchend', (e) => {
                    if (e.target.matches('button, a, .btn')) {
                        setTimeout(() => {
                            e.target.classList.remove('touch-active');
                        }, 150);
                    }
                });
            }
        },

        // Get current breakpoint
        getCurrentBreakpoint() {
            const width = window.innerWidth;
            let current = 'xs';
            
            for (const [name, minWidth] of Object.entries(this.breakpoints)) {
                if (width >= minWidth) {
                    current = name;
                }
            }
            
            return current;
        },

        // Check if viewport matches breakpoint
        matchesBreakpoint(breakpoint) {
            const width = window.innerWidth;
            return width >= this.breakpoints[breakpoint];
        }
    };

    // Font loading optimization
    const FontLoader = {
        init() {
            if ('fonts' in document) {
                document.fonts.ready.then(() => {
                    document.body.classList.add('fonts-loaded');
                });
            }
        }
    };

    // Smooth scroll enhancement
    const SmoothScroll = {
        init() {
            // Polyfill for smooth scroll
            if (!('scrollBehavior' in document.documentElement.style)) {
                this.polyfill();
            }
        },

        polyfill() {
            const originalScrollTo = window.scrollTo;
            window.scrollTo = function(x, y) {
                if (typeof x === 'object') {
                    if (x.behavior === 'smooth') {
                        return SmoothScroll.smoothScrollTo(x.left || 0, x.top || 0);
                    }
                }
                return originalScrollTo.call(window, x, y);
            };
        },

        smoothScrollTo(x, y) {
            const startX = window.pageXOffset;
            const startY = window.pageYOffset;
            const distanceX = x - startX;
            const distanceY = y - startY;
            const duration = 500;
            let start = null;

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const ease = progress * (2 - progress); // easeInOut
                window.scrollTo(
                    startX + distanceX * ease,
                    startY + distanceY * ease
                );
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            }

            requestAnimationFrame(step);
        }
    };

    // Initialize everything when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            DeviceScaler.init();
            FontLoader.init();
            SmoothScroll.init();
        });
    } else {
        DeviceScaler.init();
        FontLoader.init();
        SmoothScroll.init();
    }

    // Expose to global scope for debugging
    window.DeviceScaler = DeviceScaler;
})();