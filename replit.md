# Riverstick Motors CVR Testing Centre - Website

## Overview

This project delivers a professional website for Riverstick Motors CVR Testing Centre, providing comprehensive information about their vehicle testing services and facilitating booking capabilities. The site is designed with a modern, responsive interface, incorporating dark/light theme switching, to present a professional image aligned with the automotive service industry. The business vision is to establish a strong online presence, streamline customer access to services, and enhance market reach by offering essential vehicle testing information and booking functionalities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The website is built using pure HTML5, CSS3, and vanilla JavaScript. It employs a custom CSS design system leveraging CSS variables for dynamic theming. A mobile-first approach ensures responsive design across all devices. Typography is consistently applied using Google Fonts (Poppins), and Font Awesome provides UI icons.

### Styling Architecture
CSS is modularly organized with `style-new.css` as the main stylesheet for the modern design system. The core color scheme utilizes Burgundy (#4B0C0C) as primary and Gold (#D4AF37) as secondary. Layouts are managed using Flexbox and contemporary CSS techniques.

### Key Components
The navigation system features a sticky header with a logo and menu items, a mobile-responsive hamburger menu, and a dark/light mode toggle. A prominent "Book Now" button is included for calls-to-action. Key page sections include Home, Services, How It Works, About, Contact, and Booking. Visual elements incorporate a custom logo (`riverstick-motors-new-logo.png`) and professional automotive styling with interactive hover effects and smooth transitions. The hero section features a 5-image slideshow with smooth fade transitions.

### Data Flow
The client-side architecture relies on static HTML content with CSS styling. JavaScript manages theme switching and enables smooth scrolling for navigation. User interactions involve form handling and a booking flow. Content management is handled through static assets (images, logos) stored locally, with external resources from Google Fonts and Font Awesome CDNs. SEO optimization is integrated through meta tags and semantic HTML.

## External Dependencies

### Content Delivery Networks (CDNs)
- **Google Fonts**: Used for the Poppins font family.
- **Font Awesome**: Used for UI icons.

### Third-Party Services
- **Booking System**: Integration with external RSA booking portals for LCV and HCV testing (e.g., operator.cvrt.ie).