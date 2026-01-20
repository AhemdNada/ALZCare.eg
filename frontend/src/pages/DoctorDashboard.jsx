import React, { useState, useEffect, useRef } from 'react';

// ===== ICONS =====
const StethoscopeIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
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
    <line x1="10" x2="8" y1="9" y2="9"/>
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

const ActivityIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

const BrainIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const FilterIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const DownloadIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
);

const SearchIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </svg>
);

const PlusIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="M12 5v14"/>
  </svg>
);

const EyeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const HeartPulseIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
  </svg>
);

// ===== ANIMATED CHART BAR =====
const ChartBar = ({ height, delay, color, label, value }) => {
  const [currentHeight, setCurrentHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setCurrentHeight(height), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [height, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center flex-1">
      <div className="text-xs text-gray-500 mb-2">{label}</div>
      <div className="w-full h-40 flex items-end justify-center relative group">
        <div 
          className={`w-8 ${color} rounded-t-lg transition-all duration-700 ease-out cursor-pointer group-hover:opacity-80`}
          style={{ height: `${currentHeight}%` }}
        />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {value}
        </div>
      </div>
    </div>
  );
};

// ===== MAIN COMPONENT =====
const DoctorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());

  const [patients] = useState([
    { id: 1, name: 'Margaret Chen', age: 78, stage: 'Stage 3', lastVisit: '2 days ago', status: 'stable', adherence: 94, trend: 'up' },
    { id: 2, name: 'Robert Wilson', age: 82, stage: 'Stage 4', lastVisit: '1 week ago', status: 'needs_attention', adherence: 78, trend: 'down' },
    { id: 3, name: 'Alice Thompson', age: 75, stage: 'Stage 2', lastVisit: '3 days ago', status: 'improving', adherence: 98, trend: 'up' },
    { id: 4, name: 'James Miller', age: 79, stage: 'Stage 3', lastVisit: 'Today', status: 'stable', adherence: 92, trend: 'stable' },
    { id: 5, name: 'Patricia Davis', age: 81, stage: 'Stage 4', lastVisit: '2 weeks ago', status: 'critical', adherence: 65, trend: 'down' },
    { id: 6, name: 'William Brown', age: 76, stage: 'Stage 2', lastVisit: '5 days ago', status: 'improving', adherence: 100, trend: 'up' },
  ]);

  const [analytics] = useState({
    totalPatients: 156,
    activeToday: 42,
    medicationAdherence: 94,
    emergencyEvents: 2,
    avgSleep: '7.2h',
    avgActivity: '6.5h',
    cognitiveScores: [65, 68, 62, 70, 67, 72, 75],
    activityLevels: [85, 78, 82, 79, 88, 85, 90],
    behavioralPatterns: [45, 52, 48, 55, 60, 58, 62],
  });

  const [recentAlerts] = useState([
    { id: 1, patient: 'Robert Wilson', type: 'wandering', time: '2 hours ago', priority: 'high', description: 'Left designated safe zone' },
    { id: 2, patient: 'Patricia Davis', type: 'medication_missed', time: '5 hours ago', priority: 'high', description: 'Missed evening medication' },
    { id: 3, patient: 'Alice Thompson', type: 'routine_change', time: '1 day ago', priority: 'medium', description: 'Unusual sleep pattern detected' },
    { id: 4, patient: 'James Miller', type: 'vitals', time: '2 days ago', priority: 'low', description: 'Slightly elevated heart rate' },
  ]);

  const [todayAppointments] = useState([
    { patient: 'Margaret Chen', time: '2:00 PM', type: 'Routine cognitive assessment', duration: '45 min' },
    { patient: 'James Miller', time: '3:30 PM', type: 'Medication review', duration: '30 min' },
    { patient: 'Alice Thompson', time: '4:30 PM', type: 'Family consultation', duration: '60 min' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'stable': return { bg: 'bg-green-100', text: 'text-green-700', label: 'Stable' };
      case 'improving': return { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Improving' };
      case 'needs_attention': return { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Needs Attention' };
      case 'critical': return { bg: 'bg-red-100', text: 'text-red-700', label: 'Critical' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700', label: status };
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-amber-100 text-amber-700';
      case 'low': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredPatients = patients.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = selectedTab === 'all' || 
      (selectedTab === 'critical' && (p.status === 'critical' || p.status === 'needs_attention')) ||
      (selectedTab === 'stable' && p.status === 'stable') ||
      (selectedTab === 'improving' && p.status === 'improving');
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Medical{' '}
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
              <p className="text-gray-600">Real-time patient monitoring and clinical insights</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-white border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none transition-all w-64"
                />
              </div>
              <button className="px-4 py-2.5 border border-purple-200 text-purple-700 rounded-xl hover:bg-purple-50 transition-colors flex items-center gap-2 font-medium">
                <FilterIcon />
                Filter
              </button>
              <button className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium">
                <DownloadIcon />
                Export Report
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: UsersIcon, value: analytics.totalPatients, label: 'Total Patients', color: 'purple', trend: '+12 this month' },
                { icon: ActivityIcon, value: analytics.activeToday, label: 'Active Today', color: 'blue', trend: '27% of total' },
                { icon: BrainIcon, value: `${analytics.medicationAdherence}%`, label: 'Med Adherence', color: 'green', trend: '+2% from last week' },
                { icon: AlertCircleIcon, value: analytics.emergencyEvents, label: 'Alerts Today', color: 'red', trend: 'Needs attention' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-lg border border-purple-100/50 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`h-11 w-11 rounded-xl bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600`}>
                      <stat.icon />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{stat.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.trend}</p>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Cognitive Scores Chart */}
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Cognitive Scores</h2>
                    <p className="text-sm text-gray-500">7-day average trend</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-lg text-sm font-medium">
                    <TrendingUpIcon />
                    +5%
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  {analytics.cognitiveScores.map((score, i) => (
                    <ChartBar 
                      key={i}
                      height={score}
                      delay={i * 100}
                      color="bg-gradient-to-t from-purple-400 to-purple-600"
                      label={`Day ${i + 1}`}
                      value={`Score: ${score}`}
                    />
                  ))}
                </div>
              </div>

              {/* Activity Levels Chart */}
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Activity Levels</h2>
                    <p className="text-sm text-gray-500">Weekly overview</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-lg text-sm font-medium">
                    <TrendingUpIcon />
                    +8%
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  {analytics.activityLevels.map((level, i) => (
                    <ChartBar 
                      key={i}
                      height={level}
                      delay={i * 100}
                      color="bg-gradient-to-t from-blue-400 to-blue-600"
                      label={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                      value={`${level}% Active`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Patient List */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 overflow-hidden">
              <div className="p-6 border-b border-purple-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">Patient Overview</h2>
                  <button className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-purple-100 transition-colors">
                    <PlusIcon />
                    Add Patient
                  </button>
                </div>
                
                {/* Tabs */}
                <div className="flex gap-2 mt-4">
                  {[
                    { id: 'all', label: 'All Patients' },
                    { id: 'critical', label: 'Critical' },
                    { id: 'stable', label: 'Stable' },
                    { id: 'improving', label: 'Improving' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedTab === tab.id 
                          ? 'bg-purple-600 text-white shadow-md' 
                          : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="divide-y divide-purple-50">
                {filteredPatients.map((patient) => {
                  const statusStyle = getStatusStyle(patient.status);
                  return (
                    <div key={patient.id} className="p-5 hover:bg-purple-50/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                            <p className="text-sm text-gray-500">{patient.age} years • {patient.stage}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right hidden sm:block">
                            <p className="text-sm font-medium text-gray-700">Med Adherence</p>
                            <p className={`text-lg font-bold ${patient.adherence >= 90 ? 'text-green-600' : patient.adherence >= 75 ? 'text-amber-600' : 'text-red-600'}`}>
                              {patient.adherence}%
                            </p>
                          </div>
                          <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}>
                            {statusStyle.label}
                          </span>
                          <button className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors">
                            <EyeIcon />
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm">
                        <span className="text-gray-500">Last visit: {patient.lastVisit}</span>
                        <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1">
                          View Details
                          <ChevronRightIcon />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Recent Medical Reports</h2>
                <button className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center gap-1">
                  View All
                  <ChevronRightIcon />
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Cognitive Assessment Report - Q4', date: 'Jan 15, 2026', type: 'Assessment' },
                  { title: 'Monthly Patient Progress Summary', date: 'Jan 10, 2026', type: 'Summary' },
                  { title: 'Medication Efficacy Analysis', date: 'Jan 5, 2026', type: 'Analysis' },
                ].map((report, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-purple-50/50 rounded-xl hover:bg-purple-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                        <FileTextIcon />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{report.title}</p>
                        <p className="text-sm text-gray-500">{report.date} • {report.type}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
                      <DownloadIcon />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Alerts Panel */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Active Alerts</h2>
                  <div className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-xs text-white font-bold">
                      {recentAlerts.length}
                    </span>
                    <AlertCircleIcon className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-semibold text-gray-900">{alert.patient}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${getPriorityStyle(alert.priority)}`}>
                        {alert.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{alert.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{alert.time}</span>
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Appointments */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Today's Appointments</h2>
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg">
                  <CalendarIcon />
                  <span className="text-sm">{todayAppointments.length}</span>
                </div>
              </div>
              <div className="space-y-3">
                {todayAppointments.map((apt, i) => (
                  <div key={i} className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{apt.patient}</span>
                      <span className="text-sm bg-white/20 px-2 py-0.5 rounded">{apt.time}</span>
                    </div>
                    <p className="text-sm text-purple-200">{apt.type}</p>
                    <p className="text-xs text-purple-300 mt-1">Duration: {apt.duration}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 bg-white text-purple-700 rounded-xl font-medium hover:bg-purple-50 transition-colors">
                View Full Schedule
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      <ClockIcon />
                    </div>
                    <span className="font-medium text-gray-700">Avg Sleep</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{analytics.avgSleep}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <ActivityIcon />
                    </div>
                    <span className="font-medium text-gray-700">Avg Activity</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{analytics.avgActivity}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                      <HeartPulseIcon />
                    </div>
                    <span className="font-medium text-gray-700">Avg Heart Rate</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">72 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
