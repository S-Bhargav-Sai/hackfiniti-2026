# HACKFINITI 2026 Website

## Overview

HACKFINITI 2026 is a static, multi-page promotional website for a 24-hour national-level hackathon hosted by B V Raju Institute of Technology (BVRIT). The site features a futuristic neon aesthetic with glassmorphism design patterns, built entirely with vanilla HTML, CSS, and JavaScript. The website provides information about the hackathon including themes, event details, FAQs, and contact information across six distinct pages with consistent navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Multi-Page Static Site Structure**
- The application follows a traditional multi-page architecture with separate HTML files for each section (index, about, themes, details, faq, contact)
- Each page independently loads shared CSS and JavaScript resources
- Navigation is handled through standard anchor links with consistent navbar across all pages

**Design System**
- Glassmorphism UI pattern with transparent cards featuring blur effects and neon borders
- CSS custom properties (variables) for consistent theming including neon colors (purple, cyan, magenta, blue, pink) and backgrounds
- Futuristic typography using Google Fonts (Orbitron/Audiowide for headings, Poppins/Inter for body text)
- Dark theme with animated gradient backgrounds and radial gradients for atmospheric effects

**Animation & Interaction Patterns**
- Scroll-based reveal animations using Intersection Observer API for progressive content display
- Page transition effects that fade and slide content on load
- Mobile-responsive hamburger menu with toggle functionality
- FAQ accordion interface for collapsible Q&A sections
- Parallax effects for enhanced visual depth

**Responsive Design**
- Mobile-first approach with hamburger menu navigation for smaller screens
- CSS Grid and Flexbox layouts for flexible, responsive content arrangement
- Viewport-based units and media queries for cross-device compatibility

### Technology Stack

**Core Technologies**
- Pure HTML5 for semantic markup
- CSS3 with modern features (custom properties, gradients, transforms, filters)
- Vanilla JavaScript (ES6+) for interactivity without framework dependencies

**Asset Management**
- Remote CDN delivery for icon libraries (Remix Icons v3.5.0)
- Google Fonts CDN for typography
- Local asset directory structure for future images/media

**Code Organization**
- Shared stylesheet (`styles.css`) imported across all pages for consistency
- Centralized JavaScript (`scripts.js`) handling common functionality:
  - Mobile menu toggling
  - Page transition animations
  - Scroll reveal animations
  - FAQ accordion logic
  - Parallax effects
  - Active navigation state management

### Design Patterns

**Module Pattern in JavaScript**
- Initialization functions encapsulated within DOMContentLoaded event
- Separate concerns with dedicated functions for each interactive feature
- Event delegation for efficient event handling

**CSS Architecture**
- CSS custom properties for theme consistency and easy customization
- Pseudo-elements (::before, ::after) for decorative background layers
- BEM-like naming conventions for class organization (implied from structure)

**Progressive Enhancement**
- Core content accessible without JavaScript
- Enhanced interactions layered on top
- Intersection Observer with fallback considerations

## External Dependencies

### CDN-Delivered Resources

**Remix Icons v3.5.0**
- Icon library providing visual elements throughout the site
- Delivered via jsDelivr CDN
- Used for navigation icons, section icons, and decorative elements

**Google Fonts API**
- Orbitron font family (weights: 400-900) for futuristic headings
- Audiowide font for alternative display text
- Poppins font family (weights: 300-700) for body content
- Inter font family (weights: 300-700) for UI elements
- All served via Google Fonts CDN with font-display optimization

### No Backend Dependencies
- Pure static site with no server-side processing
- No database requirements
- No authentication systems
- No API integrations (registration links point to external Unstop platform)

### Browser APIs Utilized
- Intersection Observer API for scroll animations
- DOM manipulation APIs for interactive features
- CSS Custom Properties for dynamic theming
- requestAnimationFrame for smooth animations (implied for parallax)