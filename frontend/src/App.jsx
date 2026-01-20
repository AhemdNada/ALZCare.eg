import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import FamilyDashboard from './pages/FamilyDashboard.jsx';
import DoctorDashboard from './pages/DoctorDashboard.jsx';
import AuthPages from './pages/AuthPages.jsx';
import AboutPage from './pages/AboutPage.jsx';
import './styles/animations.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Initialize scroll animations
const ScrollAnimationInitializer = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0118] font-sans antialiased text-white">
        <ScrollToTop />
        <ScrollAnimationInitializer />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/family-dashboard" element={<FamilyDashboard />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/auth/*" element={<AuthPages />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
