# Beegum Shahijas Website

This is a responsive website for Beegum Shahijas, a company specializing in sweet roasted rice powders from Kerala, India.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
beegum-shahijas-website/
├── public/
│   ├── images/           # Place all images here
│   └── index.html        # HTML entry point
│
├── src/
│   ├── About.tsx         # About section component
│   ├── App.tsx           # Main App component
│   ├── Contact.tsx       # Contact section component
│   ├── FontSetup.tsx     # Font setup utility
│   ├── Footer.tsx        # Footer component
│   ├── Header.tsx        # Header component
│   ├── Hero.tsx          # Hero section component
│   ├── index.css         # Global styles
│   ├── index.tsx         # React entry point
│   ├── Products.tsx      # Products section component
│   └── Tradition.tsx     # Tradition section component
│
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Before Deployment

1. Replace all placeholder images in the `public/images/` directory with your actual images.
2. Update the content in each component to match your actual business information.

## Building for Production

```bash
npm run build
```

This creates a `build` folder with production-ready files that can be deployed to any static hosting service.
