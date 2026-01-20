import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// ===== ICONS =====
const HeartIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ActivityIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

const BellIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
  </svg>
);

const UsersIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const VideoIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8Z"/>
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
  </svg>
);

const MessageCircleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
  </svg>
);

const BrainIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54"/>
  </svg>
);

const StethoscopeIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
);

const HomeIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

const FileTextIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" x2="8" y1="13" y2="13"/>
    <line x1="16" x2="8" y1="17" y2="17"/>
  </svg>
);

const AlertCircleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" x2="12" y1="8" y2="12"/>
    <line x1="12" x2="12.01" y1="16" y2="16"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const SparklesIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
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

// ===== MAIN COMPONENT =====
const DashboardShowcase = () => {
  const [activeTab, setActiveTab] = useState('family');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [heroRef, heroVisible] = useScrollReveal();
  const [previewRef, previewVisible] = useScrollReveal();
  const [featuresRef, featuresVisible] = useScrollReveal();

  // Smooth tab switch handler
  const handleTabSwitch = (tab) => {
    if (tab === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    // Small delay for smooth fade out then switch
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 150);
  };

  // Sample data for family dashboard preview
  const familyData = {
    patient: { name: 'Margaret Chen', age: 78, location: 'Living Room', status: 'Active' },
    vitals: { heartRate: 72, temperature: 98.4, activity: 'Moderate' },
    medications: [
      { name: 'Donepezil', time: '9:00 AM', status: 'taken' },
      { name: 'Memantine', time: '12:00 PM', status: 'upcoming' },
      { name: 'Vitamin D', time: '6:00 PM', status: 'pending' },
    ],
    notifications: [
      { message: 'Morning medication taken on time', type: 'success' },
      { message: 'Completed 15 min morning walk', type: 'info' },
      { message: 'Doctor appointment tomorrow 2 PM', type: 'warning' },
    ]
  };

  // Sample data for doctor dashboard preview
  const doctorData = {
    stats: { patients: 156, activeToday: 42, adherence: '94%', alerts: 2 },
    patients: [
      { name: 'Margaret Chen', stage: 'Stage 3', status: 'stable', adherence: 94 },
      { name: 'Robert Wilson', stage: 'Stage 4', status: 'needs_attention', adherence: 78 },
      { name: 'Alice Thompson', stage: 'Stage 2', status: 'improving', adherence: 98 },
    ],
    appointments: [
      { patient: 'Margaret Chen', time: '2:00 PM', type: 'Cognitive Assessment' },
      { patient: 'James Miller', time: '3:30 PM', type: 'Medication Review' },
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'taken': case 'stable': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'upcoming': case 'improving': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending': case 'needs_attention': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0118] pt-20">
      
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative py-16 lg:py-20 overflow-hidden">
        {/* Background - Static gradient for better performance */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/10 text-purple-300 font-medium text-sm rounded-full mb-6">
              <SparklesIcon />
              Dashboard Preview
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Experience{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                Smart Care
              </span>
              <br />in Action
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              See how ALZCare.eg transforms Alzheimer's care with intelligent dashboards 
              for families and healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DASHBOARD PREVIEW SECTION ===== */}
      <section ref={previewRef} className="py-8 relative">
        {/* Tab Selector - Clean & Simple */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="flex justify-center">
            <div className="relative inline-flex p-1.5 bg-white/[0.05] border border-white/10 rounded-2xl">
              {/* Sliding Background Indicator */}
              <div 
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl transition-all duration-300 ease-out ${
                  activeTab === 'family' 
                    ? 'left-1.5 bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-purple-500/25' 
                    : 'left-[calc(50%+3px)] bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                }`}
              />
              
              <button
                onClick={() => handleTabSwitch('family')}
                className={`relative z-10 flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium transition-colors duration-200 ${
                  activeTab === 'family'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <HomeIcon />
                <span>Family Dashboard</span>
              </button>
              
              <button
                onClick={() => handleTabSwitch('doctor')}
                className={`relative z-10 flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium transition-colors duration-200 ${
                  activeTab === 'doctor'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <StethoscopeIcon />
                <span>Doctor Dashboard</span>
              </button>
            </div>
          </div>
          
          {/* Simple hint */}
          <p className="text-center text-gray-600 text-sm mt-3">
            Switch between dashboard views
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className={`transition-all duration-700 ${previewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Dashboard Container with Smooth Transition */}
            <div className={`transition-opacity duration-150 ease-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Family Dashboard Preview */}
            {activeTab === 'family' && (
              <div className="relative">
                
                <div className="relative bg-[#0d0520] rounded-3xl border border-purple-500/20 overflow-hidden shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border-b border-white/10 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white">
                          <HomeIcon />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white">Family Dashboard</h2>
                          <p className="text-sm text-gray-400">Real-time monitoring for your loved one</p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center gap-3">
                        <span className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium border border-green-500/30 flex items-center gap-2">
                          <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                          Live
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      
                      {/* Left Column - Patient Info */}
                      <div className="lg:col-span-2 space-y-6">
                        {/* Patient Card */}
                        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.05]">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                              MC
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{familyData.patient.name}</h3>
                              <p className="text-gray-400">{familyData.patient.age} years old</p>
                            </div>
                            <div className="ml-auto">
                              <span className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium border border-green-500/30">
                                {familyData.patient.status}
                              </span>
                            </div>
                          </div>

                          {/* Vitals Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                              { icon: HeartIcon, value: familyData.vitals.heartRate, label: 'Heart Rate', unit: 'BPM', color: 'red' },
                              { icon: MapPinIcon, value: familyData.patient.location, label: 'Location', color: 'blue' },
                              { icon: ActivityIcon, value: familyData.vitals.activity, label: 'Activity', color: 'green' },
                              { icon: ClockIcon, value: '98.4°F', label: 'Temperature', color: 'amber' },
                            ].map((vital, i) => (
                              <div key={i} className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
                                <div className={`h-10 w-10 rounded-lg bg-${vital.color}-500/20 flex items-center justify-center text-${vital.color}-400 mb-3`}>
                                  <vital.icon />
                                </div>
                                <p className="text-lg font-bold text-white">{vital.value}{vital.unit && <span className="text-sm text-gray-400 ml-1">{vital.unit}</span>}</p>
                                <p className="text-xs text-gray-500">{vital.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[
                            { icon: VideoIcon, label: 'Video Call', color: 'purple' },
                            { icon: MessageCircleIcon, label: 'Message', color: 'blue' },
                            { icon: BellIcon, label: 'Remind', color: 'amber' },
                            { icon: CalendarIcon, label: 'Schedule', color: 'green' },
                          ].map((action, i) => (
                            <button key={i} className="flex flex-col items-center justify-center p-4 bg-white/[0.03] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-purple-500/30 transition-all group">
                              <div className={`h-10 w-10 rounded-lg bg-${action.color}-500/20 flex items-center justify-center text-${action.color}-400 mb-2 group-hover:scale-110 transition-transform`}>
                                <action.icon />
                              </div>
                              <span className="text-sm font-medium text-gray-300">{action.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Sidebar */}
                      <div className="space-y-6">
                        {/* Medications */}
                        <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.05]">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <ShieldCheckIcon className="text-purple-400" />
                            Today's Medications
                          </h3>
                          <div className="space-y-3">
                            {familyData.medications.map((med, i) => (
                              <div key={i} className="flex items-center justify-between p-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                                <div>
                                  <p className="font-medium text-white">{med.name}</p>
                                  <p className="text-xs text-gray-500">{med.time}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-lg text-xs font-medium border capitalize ${getStatusColor(med.status)}`}>
                                  {med.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Notifications */}
                        <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.05]">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <BellIcon className="text-purple-400" />
                            Recent Updates
                          </h3>
                          <div className="space-y-3">
                            {familyData.notifications.map((notif, i) => (
                              <div key={i} className={`p-3 rounded-xl border ${
                                notif.type === 'success' ? 'bg-green-500/10 border-green-500/20' :
                                notif.type === 'warning' ? 'bg-amber-500/10 border-amber-500/20' :
                                'bg-blue-500/10 border-blue-500/20'
                              }`}>
                                <p className="text-sm text-gray-300">{notif.message}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Doctor Dashboard Preview */}
            {activeTab === 'doctor' && (
              <div className="relative">
                
                <div className="relative bg-[#0d0520] rounded-3xl border border-purple-500/20 overflow-hidden shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                          <StethoscopeIcon />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white">Medical Dashboard</h2>
                          <p className="text-sm text-gray-400">Clinical insights & patient analytics</p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center gap-3">
                        <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/30 flex items-center gap-2">
                          <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                          Live Monitoring
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 lg:p-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {[
                        { icon: UsersIcon, value: doctorData.stats.patients, label: 'Total Patients', color: 'purple' },
                        { icon: ActivityIcon, value: doctorData.stats.activeToday, label: 'Active Today', color: 'blue' },
                        { icon: BrainIcon, value: doctorData.stats.adherence, label: 'Med Adherence', color: 'green' },
                        { icon: AlertCircleIcon, value: doctorData.stats.alerts, label: 'Alerts', color: 'red' },
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.05]">
                          <div className="flex items-center justify-between mb-3">
                            <div className={`h-11 w-11 rounded-xl bg-${stat.color}-500/20 flex items-center justify-center text-${stat.color}-400`}>
                              <stat.icon />
                            </div>
                            <span className="text-2xl font-bold text-white">{stat.value}</span>
                          </div>
                          <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Patient List */}
                      <div className="lg:col-span-2 bg-white/[0.03] rounded-2xl border border-white/[0.05] overflow-hidden">
                        <div className="p-5 border-b border-white/[0.05]">
                          <h3 className="text-lg font-bold text-white">Patient Overview</h3>
                        </div>
                        <div className="divide-y divide-white/[0.05]">
                          {doctorData.patients.map((patient, i) => (
                            <div key={i} className="p-5 hover:bg-white/[0.03] transition-colors">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">
                                    {patient.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-white">{patient.name}</h4>
                                    <p className="text-sm text-gray-500">{patient.stage}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="text-right hidden sm:block">
                                    <p className="text-sm text-gray-400">Adherence</p>
                                    <p className={`text-lg font-bold ${patient.adherence >= 90 ? 'text-green-400' : patient.adherence >= 75 ? 'text-amber-400' : 'text-red-400'}`}>
                                      {patient.adherence}%
                                    </p>
                                  </div>
                                  <span className={`px-3 py-1.5 rounded-lg text-xs font-medium border capitalize ${getStatusColor(patient.status)}`}>
                                    {patient.status.replace('_', ' ')}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Appointments */}
                      <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-5 border border-purple-500/20">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <CalendarIcon className="text-purple-400" />
                          Today's Schedule
                        </h3>
                        <div className="space-y-3">
                          {doctorData.appointments.map((apt, i) => (
                            <div key={i} className="p-4 bg-white/[0.05] rounded-xl border border-white/10">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-white">{apt.patient}</span>
                                <span className="text-sm bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded">{apt.time}</span>
                              </div>
                              <p className="text-sm text-gray-400">{apt.type}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section ref={featuresRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Dashboards?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Designed with care, built for peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: HeartIcon, title: 'Real-Time Monitoring', desc: 'Track vital signs, location, and activity levels 24/7 with instant alerts.', color: 'pink' },
              { icon: BrainIcon, title: 'AI-Powered Insights', desc: 'Smart analytics detect patterns and predict potential issues before they occur.', color: 'purple' },
              { icon: UsersIcon, title: 'Family Connected', desc: 'Keep the whole care team informed with shared access and updates.', color: 'blue' },
              { icon: ShieldCheckIcon, title: 'Medication Management', desc: 'Never miss a dose with smart reminders and adherence tracking.', color: 'green' },
              { icon: VideoIcon, title: 'Easy Communication', desc: 'Video calls, messages, and quick contacts all in one place.', color: 'violet' },
              { icon: TrendingUpIcon, title: 'Progress Reports', desc: 'Detailed analytics and reports to track health trends over time.', color: 'amber' },
            ].map((feature, i) => (
              <div
                key={i}
                className={`group bg-white/[0.03] rounded-2xl p-6 border border-white/[0.05] hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-500 ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`h-14 w-14 rounded-xl bg-${feature.color}-500/20 border border-${feature.color}-500/30 flex items-center justify-center text-${feature.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-purple-600/20 rounded-3xl p-12 border border-purple-500/20 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                <BrainIcon className="h-8 w-8 text-purple-400" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Care?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
                Join thousands of families and healthcare providers who trust ALZCare.eg 
                for compassionate, intelligent Alzheimer's care.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/auth/signup"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                >
                  Get Started Free
                  <ChevronRightIcon />
                </Link>
                <Link
                  to="/features"
                  className="px-8 py-4 border-2 border-white/10 text-white font-semibold rounded-xl hover:bg-white/[0.05] transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardShowcase;
