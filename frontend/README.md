# NeuroCare AI Frontend

Alzheimer's Assistant System - Frontend Application

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── LandingPage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── FamilyDashboard.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── AuthPages.jsx
│   │   └── AboutPage.jsx
│   ├── styles/          # CSS files
│   │   └── animations.css
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Technologies

- **React 18** - UI library
- **React Router** - Routing
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Features

- Responsive design
- Multiple dashboards (Family, Doctor)
- Authentication pages
- Landing page with features
- About page with company info
- Smooth animations

## Development

The app runs on `http://localhost:5173` by default when using `npm run dev`.

## License

Copyright © 2023 NeuroCare AI. All rights reserved.
