# Riverstick Motors CVR Testing Centre - Website

## Overview

This is a professional website for Riverstick Motors CVR Testing Centre, providing information about their vehicle testing services and booking capabilities. The site features a modern, responsive design with dark/light theme switching and a professional automotive service presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### July 10, 2025
- Updated service cards to focus on LCV/HCV testing
- Replaced "Private Vehicle Testing" with "LCV Testing" (van icon)
- Replaced "Commercial Vehicle Testing" with "HCV Testing" (truck icon)
- Centralized navigation menu items in header toolbar
- Updated modal vehicle images with professional white vehicles
- Implemented 2x2 grid layout for service cards (removed motorcycle testing)
- Increased logo size by 20% and switched to transparent Riverstick Industries logo
- Updated "How It Works" section step 4 with RSA disc delivery timing (2-3 working days)
- Standardized opening hours to Mon-Fri 9:00am-5:30pm, weekends closed
- Updated contact details: Phone 021-4771362, Email reception@riverstickmotors.ie
- Added dedicated Contact section with 4 contact cards (phone, email, hours, location)
- Implemented proper tel: and mailto: links throughout the site
- Added comprehensive contact card styling with hover effects and animations
- Updated services section with 4 new specialized services:
  * CVR Testing (combined LCV/HCV with RSA compliance focus)
  * Tachograph Calibration (digital/analogue commercial vehicle standards)
  * Declaration of Conversion of Vehicles (RSA compliance documentation)
  * SQI Engineer's Reporting (certified inspections for modified vehicles)
- Reverted Contact section to simplified text format as requested
- Updated service icons to match new specialized service offerings

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and JavaScript (vanilla)
- **Design System**: Custom CSS with CSS variables for theming
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Theme System**: Dark/light mode toggle with CSS custom properties
- **Typography**: Google Fonts (Poppins) for consistent branding
- **Icons**: Font Awesome for UI elements

### Styling Architecture
- **CSS Organization**: Modular CSS with separate stylesheets
  - `style-new.css`: Main stylesheet with modern design system
  - `style.css`: Alternative/legacy stylesheet
- **Theme Management**: CSS custom properties (CSS variables) for dynamic theming
- **Color Scheme**: Burgundy (#4B0C0C) primary, Gold (#D4AF37) secondary
- **Layout System**: Flexbox and modern CSS techniques

## Key Components

### Navigation System
- **Sticky Header**: Fixed navigation with logo and menu items
- **Mobile-Responsive Menu**: Hamburger menu for mobile devices
- **Theme Toggle**: Dark/light mode switching functionality
- **Call-to-Action**: Prominent "Book Now" button in navigation

### Page Sections
- **Home**: Hero section with main value proposition
- **Services**: Details about CVR testing services
- **How It Works**: Process explanation for customers
- **About**: Company information and credentials
- **Contact**: Contact information and location details
- **Booking**: Appointment scheduling functionality

### Visual Elements
- **Logo Integration**: Custom logo (`new-logo.png`) with proper branding
- **Professional Design**: Automotive service industry styling
- **Interactive Elements**: Hover effects and smooth transitions

## Data Flow

### Client-Side Architecture
- **Static Content**: HTML content with CSS styling
- **Theme Management**: JavaScript-controlled theme switching
- **Navigation**: Smooth scrolling and section anchoring
- **User Interactions**: Form handling and booking flow

### Content Management
- **Static Assets**: Images and logos stored locally
- **External Resources**: Google Fonts and Font Awesome CDN
- **SEO Optimization**: Meta tags and semantic HTML structure

## External Dependencies

### Content Delivery Networks (CDNs)
- **Google Fonts**: Poppins font family for typography
- **Font Awesome**: Icon library for UI elements
- **Performance**: Preconnect headers for faster loading

### Third-Party Services
- **Booking System**: Integration placeholder for appointment scheduling
- **Contact Forms**: Potential integration with contact form services
- **Analytics**: Ready for Google Analytics or similar tracking

## Deployment Strategy

### Static Website Hosting
- **Technology**: Pure static files (HTML, CSS, JS)
- **Hosting Options**: Can be deployed on any static hosting service
- **Performance**: Optimized for fast loading with minimal dependencies
- **SEO**: Search engine friendly with proper meta tags

### Development Workflow
- **File Structure**: Organized with clear separation of concerns
- **Version Control**: Git-ready with proper file organization
- **Maintenance**: Easy to update content and styling
- **Scalability**: Modular CSS allows for easy expansion

### Browser Compatibility
- **Modern Browsers**: Optimized for current browser standards
- **Responsive Design**: Works across all device sizes
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Accessibility**: Semantic HTML and proper ARIA attributes