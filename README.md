# Nandighosh Bus - Landing Page

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://nandighosh-bus.vercel.app) 
[![GitHub](https://img.shields.io/badge/source-code-blue)](https://github.com/yourusername/nandighosh-bus)

A modern, responsive landing page for Nandighosh Bus services built with React and Tailwind CSS.

## 1) Hero Section
![Hero Section Preview](https://github.com/user-attachments/assets/79485ab5-ee5c-48c4-a2a5-1504678ae1e0)

- **Eye-catching Design**: Features the Nandighosh Bus logo with a clean, modern layout
- **Clear Value Proposition**: "Connecting Odisha, Comfortably" tagline immediately communicates the service
- **Strong CTA**: Prominent "Book Your Seat" button drives conversions

## 2) Routes Section
![Routes Section Preview](https://github.com/user-attachments/assets/7f38bbf3-1720-4f4f-954e-33cd7de8b5ea)

- **Key Route Highlighting**: Showcases 3 major routes (Balasore to Sambalpur, Jamshedpur, and Berhampur)
- **Clean Presentation**: Each route displayed with clear, easy-to-read typography
- **Responsive Layout**: Adapts beautifully from mobile to desktop views

## 3) Features Section
![Features Section Preview](https://github.com/user-attachments/assets/410e2be3-88dd-4bbb-a964-97886c5a9277)

- **USP Showcase**: Highlights 4 key benefits (AC Sleeper Coaches, Online Ticketing, Timely Departure, Clean Toilets)
- **Visual Appeal**: Clean icons and consistent styling
- **Quick Scanning**: Information organized for easy consumption

## 4) Contact Section
![Contact Section Preview](https://github.com/user-attachments/assets/21d67d4f-579e-4640-9f9d-624bfb811791)

- **Multiple Contact Options**: Includes WhatsApp CTA and contact form
- **Mobile-App Ready**: Placeholder for future app integration
- **Clean Layout**: Well-spaced elements for better usability

## Key Features

- 🚌 **Complete Responsive Design** - Works on mobile, tablet & desktop
- ⚡ **Optimized Performance** - LightHouse Score: Desktop 98 | Mobile 90
- ✨ **Interactive UI** - Smooth animations and transitions
- 📱 **Mobile-First Approach** - Optimized for mobile users

![Desktop Performance](https://github.com/user-attachments/assets/da0f624a-6ae6-45ec-a6e0-1e785a247d99)
![Mobile Performance](https://github.com/user-attachments/assets/5847949b-e15c-40d4-acc9-af68c917f382)

## Technologies Used

| Category        | Technologies                          |
|-----------------|---------------------------------------|
| Framework       | React 19.1                            |
| Styling         | Tailwind CSS 3                        |
| Animations      | Framer Motion                         |
| Icons           | Heroicons                             |
| Deployment      | Vercel (Serverless)                   |
| Code Quality    | ESLint + Prettier                     |

## Performance Optimizations

1. **LCP Improvement** (2.9s → 1.2s):
   - Preloaded critical assets
   - Inlined core CSS for above-the-fold content
   - Used modern image formats (AVIF)

2. **Reduced CLS** (0.25 → 0):
   - Explicit dimensions for all media
   - Font face observer for layout stability
   - Reserved space for dynamic content

3. **Bundle Optimization**:
   - Dynamic component imports
   - Tree-shaken Tailwind config
   - Code splitting for better loading

## Project Structure
![Project Structure](https://github.com/user-attachments/assets/a621a4b6-6ffe-4a89-8d2e-4b2f18b7f27b)

- **Component-Based Architecture**: Organized by feature (Header, Hero, Routes etc.)
- **Separation of Concerns**: Utils folder for constants and helpers
- **Optimized Assets**: Images stored in public/assets for easy access
