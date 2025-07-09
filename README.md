# Nandighosh Bus - Landing Page

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://nandighosh-bus.vercel.app) 
[![GitHub](https://img.shields.io/badge/source-code-blue)](https://github.com/yourusername/nandighosh-bus)

A modern, responsive landing page for Nandighosh Bus services built with React and Tailwind CSS.

![Hero Section Preview](https://github.com/user-attachments/assets/79485ab5-ee5c-48c4-a2a5-1504678ae1e0)

![Routes Section Preview](https://github.com/user-attachments/assets/7f38bbf3-1720-4f4f-954e-33cd7de8b5ea)

![Features Section Preview](https://github.com/user-attachments/assets/410e2be3-88dd-4bbb-a964-97886c5a9277)

![Contact Section Preview](https://github.com/user-attachments/assets/21d67d4f-579e-4640-9f9d-624bfb811791)


## Key Features

- 🚌 **Complete Responsive Design** - Works on mobile, tablet & desktop
- ⚡ **Optimized Performance** - LightHouse Score : For Desktop - 98 | For Mobile - 90
![Desktop](https://github.com/user-attachments/assets/da0f624a-6ae6-45ec-a6e0-1e785a247d99)= 📱 **Desktop** Approach 
![Mobile](https://github.com/user-attachments/assets/5847949b-e15c-40d4-acc9-af68c917f382)- 📱 **Mobile-First** Approach : 



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

3. **Bundle Optimization**:
   - Dynamic component imports
   - Tree-shaken Tailwind config

## Project Structure

nandighosh-bus/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── bus-hero.jpg
│       ├── nandighosh-logo.png
│       └── pattern.svg
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │        ├── BalasoreToBerhampur.jpg
│   │        ├── BalasoreToJamshedpur.jpg
│   │        ├── BalasoreToSambalpur.jpg
│   │        ├── nandighoshbus_logo.jpeg
│   │
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Routes.jsx
│   │   ├── Features.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│   
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── vite.config.js
└── package.json



