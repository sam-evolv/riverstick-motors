// CSP-safe: no use of eval
// All functions use direct DOM manipulation without eval()

function openModal() {
    const modal = document.getElementById("booking-modal");
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal() {
    const modal = document.getElementById("booking-modal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Mobile Navigation
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navCenter = document.getElementById("nav-center");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        const isActive = navMenu.classList.contains("nav-menu-active");
        navMenu.classList.toggle("nav-menu-active");
        navCenter.classList.toggle("nav-center-active");
        navToggle.classList.toggle("nav-toggle-active");
        navToggle.setAttribute("aria-expanded", !isActive);
    });
}

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("nav-menu-active");
        navCenter.classList.remove("nav-center-active");
        navToggle.classList.remove("nav-toggle-active");
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]:not([onclick])').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const headerHeight = document.querySelector(".header").offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const savedTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", savedTheme);
if (savedTheme === "dark") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        
        if (newTheme === "dark") {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
    });
}

// Hero slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("active");
}

if (totalSlides > 1) {
    setInterval(nextSlide, 4000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .scale-in").forEach(element => {
    observer.observe(element);
});

// Timeline observer
const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".timeline-item").forEach(item => {
                item.classList.add("visible");
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const timelineStrip = document.querySelector(".timeline-strip");
if (timelineStrip) {
    timelineObserver.observe(timelineStrip);
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    const modal = document.getElementById("booking-modal");
    if (e.target === modal) {
        closeModal();
    }
});

// Slideshow functionality
const slides = document.querySelectorAll('.slideshow-image');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start slideshow
if (slides.length > 0) {
    setInterval(nextSlide, 4000); // Change slide every 4 seconds
}