import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu';

// Icons
const BrainIcon = () => (
  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54"/>
  </svg>
);

const UserCircleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="10" r="3"/>
    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
  </svg>
);

const MenuIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const XIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const ChevronDownIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

// Dashboard icons
const FamilyIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const DoctorIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDashboardOpen(false);
  }, [location]);

  // Update active indicator position
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector('[data-active="true"]');
      if (activeLink) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setActiveIndicator({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
  ];

  const dashboardItems = [
    { 
      name: 'Family Dashboard', 
      path: '/family-dashboard', 
      description: 'Monitor and support your loved ones',
      icon: FamilyIcon,
      color: 'from-pink-500 to-rose-500'
    },
    { 
      name: 'Doctor Dashboard', 
      path: '/doctor-dashboard', 
      description: 'Clinical insights & patient analytics',
      icon: DoctorIcon,
      color: 'from-blue-500 to-cyan-500'
    },
  ];

  const isActive = (path) => location.pathname === path;
  const isDashboardActive = dashboardItems.some(item => location.pathname === item.path);

  // Menu items for StaggeredMenu
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Features', link: '/features' },
    { label: 'About', link: '/about' },
    { label: 'Family', link: '/family-dashboard' },
    { label: 'Doctor', link: '/doctor-dashboard' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'GitHub', link: 'https://github.com' },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pt-4 ${isOpen ? 'z-[9998]' : 'z-[9999]'}`}>
        <nav 
          className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl ${
            scrolled 
              ? 'bg-[#0d0520]/95 shadow-[0_8px_40px_rgba(124,58,237,0.25)] border border-purple-500/20' 
              : 'bg-[#0d0520]/80 shadow-[0_4px_24px_rgba(124,58,237,0.15)] border border-white/5'
          }`}
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-[72px]">
              
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  {/* Logo container */}
                  <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-violet-800 p-2.5 rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-[1.02]">
                    <BrainIcon />
                    {/* Online indicator */}
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent">
                    ALZCare.eg
                  </h1>
                  <p className="text-[11px] text-gray-400 font-medium tracking-wide">AI-Powered Alzheimer's Care</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center">
                {/* Nav Links with animated indicator */}
                <div ref={navRef} className="relative flex items-center bg-white/[0.03] rounded-full p-1.5 border border-white/[0.05]">
                  {/* Animated background indicator */}
                  <div 
                    className="absolute h-[calc(100%-12px)] bg-purple-500/20 rounded-full transition-all duration-300 ease-out"
                    style={{
                      left: activeIndicator.left + 6,
                      width: activeIndicator.width - 12,
                      opacity: activeIndicator.width > 0 ? 1 : 0,
                    }}
                  />
                  
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      data-active={isActive(item.path)}
                      className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-purple-300'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Dashboard Dropdown Trigger */}
                  <div className="relative">
                    <button
                      onClick={() => setDashboardOpen(!dashboardOpen)}
                      onMouseEnter={() => setDashboardOpen(true)}
                      className={`relative flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isDashboardActive || dashboardOpen
                          ? 'text-purple-300'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Dashboards
                      <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${dashboardOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Auth Buttons & Mobile Menu */}
              <div className="flex items-center gap-2">
                {/* Sign In - Text button */}
                <Link
                  to="/auth/login"
                  className="hidden lg:flex items-center px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-all duration-300"
                >
                  Sign In
                </Link>
                
                {/* Get Started - Primary CTA */}
                <Link
                  to="/auth/signup"
                  className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <span>Get Started</span>
                  <ArrowRightIcon />
                </Link>
                
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-2.5 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <XIcon /> : <MenuIcon />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Mega Dropdown */}
        <div 
          className={`hidden lg:block absolute left-1/2 -translate-x-1/2 mt-3 transition-all duration-300 ${
            dashboardOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4 pointer-events-none'
          }`}
          onMouseEnter={() => setDashboardOpen(true)}
          onMouseLeave={() => setDashboardOpen(false)}
        >
          <div className="bg-[#0d0520]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(124,58,237,0.3)] border border-purple-500/20 p-2 min-w-[420px]">
            {/* Arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0d0520] border-l border-t border-purple-500/20 rotate-45" />
            
            <div className="relative grid gap-1">
              {dashboardItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setDashboardOpen(false)}
                    className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'bg-purple-500/10' 
                        : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <Icon />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${isActive(item.path) ? 'text-purple-300' : 'text-white'}`}>
                          {item.name}
                        </span>
                        <ArrowRightIcon />
                      </div>
                      <p className="text-sm text-gray-400 mt-0.5">{item.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            {/* Footer */}
            <div className="mt-2 pt-2 border-t border-white/[0.05]">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-xs text-gray-500">Need help choosing?</span>
                <Link 
                  to="/about" 
                  onClick={() => setDashboardOpen(false)}
                  className="text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Staggered Mobile Menu */}
      <div className="lg:hidden">
        <StaggeredMenu
          isOpen={isOpen}
          onToggle={setIsOpen}
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          isFixed={true}
          accentColor="#7C3AED"
          closeOnClickAway={true}
          onMenuClose={() => setIsOpen(false)}
        />
      </div>
    </>
  );
};

export default Navbar;
