import React, { useEffect, lazy, Suspense, memo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import TrueFocus from './components/ui/TrueFocus.jsx';
import './styles/animations.css';

// ===== LAZY LOADED PAGES =====
// Each page is loaded only when needed, reducing initial bundle size
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage.jsx'));
const DashboardShowcase = lazy(() => import('./pages/DashboardShowcase.jsx'));
const AuthPages = lazy(() => import('./pages/AuthPages.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));

// ===== LOADING FALLBACK =====
// TrueFocus animated loader - completes full animation before showing page
const PageLoader = memo(({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationDuration = 0.5;
  const pauseBetweenAnimations = 0.8;
  const totalWords = 2; // "ALZ" and "Care"
  
  useEffect(() => {
    // Calculate total animation time: each word gets focused once, then we finish
    const totalTime = (animationDuration + pauseBetweenAnimations) * totalWords * 1000;
    
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      if (onComplete) onComplete();
    }, totalTime);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (animationComplete) return null;

  return (
    <div 
      className="fixed inset-0 z-[10000] bg-[#0a0118] flex items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <TrueFocus
        sentence="ALZ Care"
        blurAmount={5}
        borderColor="#7c3aed"
        glowColor="rgba(124, 58, 237, 0.6)"
        animationDuration={animationDuration}
        pauseBetweenAnimations={pauseBetweenAnimations}
      />
    </div>
  );
});
PageLoader.displayName = 'PageLoader';

// ===== SCROLL TO TOP COMPONENT =====
// Memoized to prevent unnecessary re-renders
const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use smooth scroll for better UX, with fallback
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
});
ScrollToTop.displayName = 'ScrollToTop';

// ===== SCROLL ANIMATION INITIALIZER =====
// Sets up intersection observer for CSS-based scroll animations
const ScrollAnimationInitializer = memo(() => {
  useEffect(() => {
    // Use a single observer for all animated elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .animate-on-scroll'
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
});
ScrollAnimationInitializer.displayName = 'ScrollAnimationInitializer';

// ===== MAIN APP COMPONENT =====
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {/* Initial loading animation */}
      {isLoading && <PageLoader onComplete={handleLoadingComplete} />}
      
      {/* Main app content - hidden during loading */}
      <div 
        className={`min-h-screen bg-[#0a0118] font-sans antialiased text-white flex flex-col transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Utility components */}
        <ScrollToTop />
        <ScrollAnimationInitializer />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content area */}
        <main id="main-content" className="flex-1" role="main">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/dashboard" element={<DashboardShowcase />} />
              <Route path="/family-dashboard" element={<DashboardShowcase />} />
              <Route path="/doctor-dashboard" element={<DashboardShowcase />} />
              <Route path="/auth/*" element={<AuthPages />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
