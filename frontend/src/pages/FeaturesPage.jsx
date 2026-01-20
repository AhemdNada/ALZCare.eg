import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// ===== ICONS =====
const UserIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const MicIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" x2="12" y1="19" y2="22"/>
  </svg>
);

const BellIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const AlertCircleIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" x2="12" y1="8" y2="12"/>
    <line x1="12" x2="12.01" y1="16" y2="16"/>
  </svg>
);

const MapPinIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const HeartIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const BrainIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

// ===== SCROLL REVEAL HOOK =====
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// ===== TIMELINE FEATURE ITEM =====
const TimelineFeatureItem = ({ feature, index, isVisible, isLeft, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef(null);
  
  // Combine hover and scroll-active states
  const isHighlighted = isHovered || isActive;
  
  return (
    <div 
      ref={itemRef}
      data-feature-index={index}
      className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8 gap-4`}
    >
      {/* Content Card */}
      <div 
        className={`lg:w-[calc(50%-40px)] w-full transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : isLeft 
              ? 'opacity-0 -translate-x-20' 
              : 'opacity-0 translate-x-20'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`relative bg-white/[0.03] rounded-3xl p-8 border border-white/[0.05] 
            transition-all duration-500 group overflow-hidden
            ${isHighlighted ? 'bg-white/[0.06] border-purple-500/30 scale-[1.02]' : ''}
          `}
        >
          {/* Gradient background on hover/active */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 ${isHighlighted ? 'opacity-10' : ''}`} 
          />
          
          {/* Feature number badge - always on the right side */}
          <div className="absolute top-6 right-6 lg:block hidden">
            <span className={`text-6xl font-black bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent transition-opacity duration-300 ${isHighlighted ? 'opacity-60' : 'opacity-30'}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Icon */}
          <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 text-white mb-6 shadow-lg shadow-purple-500/20 transition-all duration-300 ${isHighlighted ? 'scale-110 rotate-3' : ''}`}>
            <feature.icon />
          </div>

          {/* Content */}
          <div className="relative">
            <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isHighlighted ? 'text-purple-300' : 'text-white'}`}>
              {feature.title}
            </h3>
            <p className="text-gray-400 mb-5 leading-relaxed">
              {feature.description}
            </p>

            {/* Benefits */}
            <div className="space-y-2 mb-6">
              {feature.benefits.slice(0, 3).map((benefit, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 text-sm text-gray-400 transition-all duration-300 ${
                    isHighlighted ? 'translate-x-2' : ''
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="h-3 w-3 text-green-400" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center pt-4 border-t border-white/[0.05]">
              <div className="flex items-center gap-2 text-purple-400">
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                  <span className="text-xs font-bold text-white">{feature.usage}</span>
                </div>
                <span className="text-sm font-medium">patients daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Node */}
      <div 
        className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150 + 100}ms` }}
      >
        <div 
          className={`h-16 w-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg shadow-purple-500/30 border-4 border-[#0a0118]
            ${isHighlighted ? 'scale-125 shadow-xl shadow-purple-500/50' : ''}
            transition-all duration-300
          `}
        >
          <span className="text-white font-bold text-lg">{index + 1}</span>
        </div>
      </div>

      {/* Empty space for the other side */}
      <div className="lg:w-[calc(50%-40px)] hidden lg:block" />
    </div>
  );
};

// ===== MAIN COMPONENT =====
const FeaturesPage = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal();
  const [howItWorksRef, howItWorksVisible] = useScrollReveal();
  const [comparisonRef, comparisonVisible] = useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(-1);
  const timelineContainerRef = useRef(null);
  const featureItemRefs = useRef([]);

  // Track scroll progress for timeline line fill AND active feature
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current) return;
      
      const container = timelineContainerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline is visible/scrolled
      const totalHeight = container.offsetHeight;
      const scrolledPast = Math.max(0, windowHeight * 0.5 - rect.top);
      const progress = Math.min(1, Math.max(0, scrolledPast / totalHeight));
      
      setScrollProgress(progress);
      
      // Find which feature's timeline node is closest to center of viewport
      const featureItems = container.querySelectorAll('[data-feature-index]');
      const viewportCenter = windowHeight * 0.45; // Slightly above center for better UX
      
      let closestIndex = -1;
      let closestDistance = Infinity;
      
      featureItems.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);
        
        // Only activate if the item is reasonably visible
        if (distance < closestDistance && itemRect.top < windowHeight * 0.7 && itemRect.bottom > windowHeight * 0.3) {
          closestDistance = distance;
          closestIndex = parseInt(item.dataset.featureIndex);
        }
      });
      
      setActiveFeatureIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      id: 1,
      icon: UserIcon,
      title: "Face Recognition Assistance",
      description: "AI-powered facial recognition helps patients identify family members and caregivers, reducing confusion and anxiety.",
      benefits: [
        "Real-time face identification with names",
        "Privacy-first on-device processing",
        "Continuous learning from family photos",
        "Reduces patient anxiety and confusion"
      ],
      usage: "500+",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      id: 2,
      icon: MicIcon,
      title: "Voice-Based Interaction",
      description: "Natural voice commands and conversational AI for easy interaction, especially for patients with mobility challenges.",
      benefits: [
        "Natural language understanding",
        "Multi-language support",
        "Adaptive to speech patterns",
        "Hands-free operation"
      ],
      usage: "800+",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      id: 3,
      icon: BellIcon,
      title: "Medication Reminders",
      description: "Smart medication scheduling with visual and auditory reminders, plus family notification system for missed doses.",
      benefits: [
        "Customizable reminder schedules",
        "Pharmacy integration",
        "Missed dose notifications",
        "Medication interaction alerts"
      ],
      usage: "1.2K+",
      gradient: "from-purple-600 to-purple-800"
    },
    {
      id: 4,
      icon: CalendarIcon,
      title: "Daily Schedule Assistant",
      description: "Structured daily routine guidance including meals, activities, appointments, and social engagements.",
      benefits: [
        "Personalized activity planning",
        "Family schedule management",
        "Appointment reminders",
        "Routine consistency tracking"
      ],
      usage: "650+",
      gradient: "from-violet-600 to-purple-700"
    },
    {
      id: 5,
      icon: AlertCircleIcon,
      title: "Emergency Button",
      description: "One-touch emergency alert system connecting patients directly to caregivers and emergency services.",
      benefits: [
        "Instant caregiver alerts",
        "Automatic location sharing",
        "Medical info transmission",
        "Two-way video calling"
      ],
      usage: "400+",
      gradient: "from-rose-500 to-purple-600"
    },
    {
      id: 6,
      icon: MapPinIcon,
      title: "Smart Location Tracking",
      description: "Geofencing and indoor tracking for patient safety with family access to real-time location data.",
      benefits: [
        "Real-time GPS tracking",
        "Indoor positioning system",
        "Safe zone configuration",
        "Wandering pattern detection"
      ],
      usage: "750+",
      gradient: "from-purple-500 to-violet-700"
    },
    {
      id: 7,
      icon: HeartIcon,
      title: "Emotion Awareness",
      description: "AI detects emotional states through voice and facial analysis, providing appropriate responses or alerting caregivers.",
      benefits: [
        "Voice tone analysis",
        "Facial expression recognition",
        "Distress detection",
        "Mood tracking over time"
      ],
      usage: "300+",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      id: 8,
      icon: BrainIcon,
      title: "Memory Assistant",
      description: "Digital memory book, reminiscence therapy tools, and cognitive exercise games designed for Alzheimer's patients.",
      benefits: [
        "Digital photo albums",
        "Memory games and exercises",
        "Reminiscence therapy",
        "Cognitive progress tracking"
      ],
      usage: "900+",
      gradient: "from-purple-600 to-purple-900"
    },
    {
      id: 9,
      icon: TrendingUpIcon,
      title: "Smart Recommendations",
      description: "AI-powered suggestions for activities, therapies, and care adjustments based on comprehensive patient data analysis.",
      benefits: [
        "Personalized care suggestions",
        "Pattern recognition",
        "Predictive health insights",
        "Treatment optimization"
      ],
      usage: "200+",
      gradient: "from-violet-700 to-purple-900"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Patient Speaks",
      description: "The patient asks a question or makes a request using natural voice commands.",
      icon: "🎙️"
    },
    {
      step: 2,
      title: "Workflow Triggered",
      description: "The request is sent to our intelligent workflow orchestration system.",
      icon: "⚡"
    },
    {
      step: 3,
      title: "Multi-Agent Processing",
      description: "Specialized AI agents collaborate to analyze, understand, and process the request.",
      icon: "🤖"
    },
    {
      step: 4,
      title: "Voice Response",
      description: "A personalized, compassionate response is delivered back to the patient via voice.",
      icon: "🔊"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0118] pt-20 overflow-hidden">
      {/* Hero Section */}
      <section ref={headerRef} className="py-24 px-4 relative">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className={`text-center transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] border border-white/10 text-purple-300 font-medium text-sm rounded-full mb-8">
              <span className="h-2 w-2 bg-purple-500 rounded-full animate-pulse" />
              9 Powerful AI Features
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Everything You Need for
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Comprehensive Care
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 3 150 3 298 8" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#a855f7"/>
                      <stop offset="1" stopColor="#8b5cf6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Our Alzheimer's Assistant combines cutting-edge AI with compassionate design 
              to provide the most comprehensive support available.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: '9', label: 'Core Features' },
                { value: '10K+', label: 'Daily Users' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'AI Support' },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className={`text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Features Section */}
      <section ref={timelineRef} className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-20 transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Scroll down to discover how each feature works together to provide complete care
            </p>
          </div>

          {/* Timeline container */}
          <div ref={timelineContainerRef} className="relative">
            {/* Center timeline line - background */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-purple-500/20 rounded-full" />
            
            {/* Center timeline line - filled based on scroll */}
            <div 
              className="hidden lg:block absolute left-1/2 top-0 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-purple-600 to-violet-600 rounded-full transition-all duration-100"
              style={{ height: `${scrollProgress * 100}%` }}
            />

            {/* Glowing dot at the fill point */}
            <div 
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 transition-all duration-100"
              style={{ 
                top: `${scrollProgress * 100}%`,
                opacity: scrollProgress > 0 && scrollProgress < 1 ? 1 : 0
              }}
            >
              <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75" />
            </div>

            {/* Feature items */}
            <div className="space-y-16 lg:space-y-24">
              {features.map((feature, index) => (
                <TimelineFeatureItem
                  key={feature.id}
                  feature={feature}
                  index={index}
                  isVisible={timelineVisible}
                  isLeft={index % 2 === 0}
                  isActive={activeFeatureIndex === index}
                />
              ))}
            </div>

            {/* End node */}
            <div 
              className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-8 transition-all duration-700 ${
                scrollProgress > 0.95 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            >
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-2xl shadow-purple-500/30 border-4 border-white">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - AI Workflow - Premium Design */}
      <section ref={howItWorksRef} className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[#0a0118]">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px]" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" />
          <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-violet-300 rounded-full animate-ping opacity-40" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl text-white font-medium text-sm rounded-full mb-8 border border-white/10">
              <div className="relative">
                <span className="h-2.5 w-2.5 bg-green-400 rounded-full block" />
                <span className="absolute inset-0 h-2.5 w-2.5 bg-green-400 rounded-full animate-ping" />
              </div>
              <span>Powered by Multi-Agent AI</span>
              <div className="h-4 w-px bg-white/20" />
              <span className="text-purple-300">Real-time Processing</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              The Intelligence
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Behind Every Response
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              When a patient speaks, a symphony of AI agents orchestrate together 
              to deliver compassionate, accurate responses in milliseconds.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left - Workflow Steps */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                {/* Vertical connector line */}
                <div className="absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-purple-500/50 via-violet-500/30 to-transparent hidden md:block" />
                
                <div className="space-y-6">
                  {howItWorks.map((item, index) => (
                    <div 
                      key={item.step}
                      className={`group relative transition-all duration-700 ${
                        howItWorksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 200 + 300}ms` }}
                    >
                      <div className="relative flex gap-6 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-500 group">
                        {/* Glow on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Step indicator */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="relative">
                            {/* Outer ring */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                            
                            {/* Icon container */}
                            <div className="relative h-16 w-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                              <span className="text-3xl filter drop-shadow-lg">{item.icon}</span>
                            </div>
                            
                            {/* Step number */}
                            <div className="absolute -top-2 -right-2 h-7 w-7 bg-[#0a0118] rounded-full flex items-center justify-center border-2 border-purple-400 shadow-lg shadow-purple-500/20">
                              <span className="text-xs font-bold text-purple-300">{item.step}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex-1 pt-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="relative z-10 hidden sm:flex items-center">
                          <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all duration-300">
                            <ChevronRightIcon />
                          </div>
                        </div>
                      </div>
                      
                      {/* Connector dot */}
                      {index < howItWorks.length - 1 && (
                        <div className="absolute left-8 -bottom-3 w-px h-6 hidden md:flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-purple-500/50" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Response time badge */}
                <div 
                  className={`mt-8 inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 transition-all duration-700 ${
                    howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: '1100ms' }}
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/25">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">&lt; 100ms</div>
                    <div className="text-sm text-gray-400">Average Response Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Workflow Diagram */}
            <div className={`lg:col-span-7 order-1 lg:order-2 transition-all duration-1000 ${howItWorksVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-600/20 rounded-[2rem] blur-2xl" />
                
                {/* Main container */}
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-2 border border-white/10 shadow-2xl">
                  {/* Inner border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10 pointer-events-none" />
                  
                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#0d0520]">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl border border-purple-500/20" />
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/40 rounded-tl-2xl" />
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-violet-500/40 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-violet-500/40 rounded-bl-2xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/40 rounded-br-2xl" />
                    
                    {/* Image */}
                    <div className="relative aspect-[4/3] p-6">
                      <img 
                        src="/workflow-diagram.png" 
                        alt="AI Multi-Agent Workflow Architecture"
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-full shadow-xl shadow-purple-500/30 flex items-center gap-2">
                    <div className="relative">
                      <span className="h-2 w-2 bg-green-400 rounded-full block" />
                      <span className="absolute inset-0 h-2 w-2 bg-green-400 rounded-full animate-ping" />
                    </div>
                    Live Architecture
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 px-5 py-2.5 bg-[#0a0118] text-white text-sm font-semibold rounded-full shadow-xl border border-purple-500/30 flex items-center gap-2">
                    <span className="text-lg">🤖</span>
                    Multi-Agent System
                  </div>
                  
                  
                </div>

                {/* Stats row */}
                <div 
                  className={`grid grid-cols-3 gap-4 mt-8 transition-all duration-700 ${
                    howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  {[
                    { value: '5+', label: 'AI Agents', icon: '🤖' },
                    { value: '99.9%', label: 'Accuracy', icon: '🎯' },
                    { value: '24/7', label: 'Available', icon: '🌐' },
                  ].map((stat, i) => (
                    <div 
                      key={i}
                      className="relative group p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-300 text-center"
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section ref={comparisonRef} className="py-24 px-4 bg-[#0d0520]">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                ALZCare.eg
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              See how we compare to traditional care methods
            </p>
          </div>

          <div className={`bg-white/[0.03] rounded-3xl overflow-hidden border border-white/[0.05] transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-3 bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 text-white">
              <div className="p-6 font-semibold text-lg">Feature</div>
              <div className="p-6 font-semibold text-center text-lg border-l border-white/10">Traditional</div>
              <div className="p-6 font-semibold text-center text-lg border-l border-white/10">ALZCare.eg</div>
            </div>
            {[
              ['24/7 Monitoring', 'Limited', 'Continuous', true],
              ['Response Time', 'Minutes to Hours', 'Instant', true],
              ['Medication Tracking', 'Manual Logs', 'Automated', true],
              ['Location Safety', 'Periodic Check-ins', 'Real-time GPS', true],
              ['Family Updates', 'Phone Calls', 'Live Dashboard', true],
              ['Cognitive Exercises', 'Scheduled Sessions', 'Personalized AI', true],
            ].map(([feature, traditional, neurocare, highlight], index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 group hover:bg-white/[0.03] transition-colors ${
                  index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                }`}
              >
                <div className="p-5 font-medium text-white group-hover:text-purple-300 transition-colors">{feature}</div>
                <div className="p-5 text-center text-gray-500 border-l border-white/[0.05]">{traditional}</div>
                <div className="p-5 text-center border-l border-white/[0.05]">
                  <span className="inline-flex items-center gap-2 text-purple-400 font-medium">
                    <span className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircleIcon className="h-3 w-3 text-green-400" />
                    </span>
                    {neurocare}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#0a0118]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Start your free trial today and see how ALZCare.eg can transform care for your loved ones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/auth/signup"
              className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-2xl shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 text-lg"
            >
              Start Free Trial
              <ChevronRightIcon className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/family-dashboard"
              className="px-10 py-5 border-2 border-white/10 text-white font-semibold rounded-2xl hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300 flex items-center gap-3 text-lg"
            >
              View Demo Dashboard
            </Link>
          </div>
          <p className="mt-8 text-gray-500 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
