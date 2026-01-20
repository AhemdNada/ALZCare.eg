import React, { useState, useEffect } from 'react';

// ===== ICONS =====
const ActivityIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

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

const ClockIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const BellIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
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

const BatteryIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="10" x="2" y="7" rx="2" ry="2"/>
    <line x1="22" x2="22" y1="11" y2="13"/>
    <line x1="6" x2="6" y1="11" y2="13"/>
    <line x1="10" x2="10" y1="11" y2="13"/>
  </svg>
);

const WifiIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <line x1="12" x2="12.01" y1="20" y2="20"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ThermometerIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
  </svg>
);

const MoonIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

const AlertTriangleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <line x1="12" x2="12" y1="9" y2="13"/>
    <line x1="12" x2="12.01" y1="17" y2="17"/>
  </svg>
);

// ===== MAIN COMPONENT =====
const FamilyDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const [patientStatus] = useState({
    name: "Margaret Chen",
    age: 78,
    location: "Living Room",
    heartRate: 72,
    temperature: 98.4,
    activityLevel: "Active",
    mood: "Content",
    sleepQuality: "Good",
    medicationNext: "30 min",
    lastUpdate: "Just now",
    batteryLevel: 85,
    deviceOnline: true
  });

  const [vitalHistory] = useState([
    { time: '6AM', heartRate: 68, activity: 20 },
    { time: '9AM', heartRate: 75, activity: 85 },
    { time: '12PM', heartRate: 72, activity: 45 },
    { time: '3PM', heartRate: 78, activity: 60 },
    { time: '6PM', heartRate: 70, activity: 30 },
    { time: 'Now', heartRate: 72, activity: 55 },
  ]);

  const [notifications] = useState([
    { id: 1, type: 'success', message: 'Morning medication taken on time', time: '9:00 AM', read: true },
    { id: 2, type: 'info', message: 'Completed morning walk routine - 15 min', time: '10:30 AM', read: true },
    { id: 3, type: 'success', message: 'Video call with Dr. Johnson completed', time: '11:00 AM', read: true },
    { id: 4, type: 'warning', message: 'Doctor appointment reminder: Tomorrow 2 PM', time: 'Just now', read: false },
  ]);

  const [medications] = useState([
    { id: 1, name: 'Donepezil', time: '9:00 AM', status: 'taken', dosage: '10mg', purpose: 'Memory' },
    { id: 2, name: 'Memantine', time: '9:00 AM', status: 'taken', dosage: '20mg', purpose: 'Cognitive' },
    { id: 3, name: 'Vitamin D', time: '12:00 PM', status: 'scheduled', dosage: '2000 IU', purpose: 'Bone Health' },
    { id: 4, name: 'Galantamine', time: '6:00 PM', status: 'pending', dosage: '16mg', purpose: 'Memory' },
  ]);

  const [emergencyContacts] = useState([
    { name: 'Dr. Sarah Johnson', role: 'Primary Neurologist', phone: '(555) 123-4567' },
    { name: 'Sunrise Care Facility', role: 'Care Center', phone: '(555) 987-6543' },
    { name: 'John Chen', role: 'Son', phone: '(555) 456-7890' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'taken': return 'bg-green-100 text-green-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-amber-100 text-amber-700';
      case 'missed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getNotificationStyle = (type) => {
    switch (type) {
      case 'success': return 'border-l-green-500 bg-green-50';
      case 'warning': return 'border-l-amber-500 bg-amber-50';
      case 'error': return 'border-l-red-500 bg-red-50';
      default: return 'border-l-blue-500 bg-blue-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Family{' '}
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
              <p className="text-gray-600">Real-time monitoring and updates for your loved one</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-white rounded-xl shadow-sm border border-purple-100 flex items-center gap-2">
                <ClockIcon />
                <span className="text-gray-700 font-medium">
                  {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <button className="px-4 py-2 bg-red-500 text-white rounded-xl font-medium shadow-lg hover:bg-red-600 transition-colors flex items-center gap-2">
                <AlertTriangleIcon />
                Emergency
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Patient Status Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {patientStatus.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="h-2 w-2 bg-white rounded-full animate-pulse" />
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{patientStatus.name}</h2>
                      <p className="text-gray-500">{patientStatus.age} years old • Alzheimer's Stage 3</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-4">
                    <div className="flex items-center gap-2 text-green-600">
                      <WifiIcon />
                      <span className="text-sm font-medium">Online</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BatteryIcon />
                      <span className="text-sm font-medium">{patientStatus.batteryLevel}%</span>
                    </div>
                  </div>
                </div>

                {/* Vital Signs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                        <HeartIcon />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{patientStatus.heartRate}</div>
                    </div>
                    <p className="text-sm text-gray-600">Heart Rate (BPM)</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <MapPinIcon />
                      </div>
                      <div className="text-lg font-bold text-gray-900">{patientStatus.location}</div>
                    </div>
                    <p className="text-sm text-gray-600">Current Location</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                        <ActivityIcon />
                      </div>
                      <div className="text-lg font-bold text-gray-900">{patientStatus.activityLevel}</div>
                    </div>
                    <p className="text-sm text-gray-600">Activity Level</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                        <ThermometerIcon />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{patientStatus.temperature}°</div>
                    </div>
                    <p className="text-sm text-gray-600">Temperature (F)</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="border-t border-purple-100 pt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: VideoIcon, label: 'Video Call', color: 'purple' },
                      { icon: MessageCircleIcon, label: 'Send Message', color: 'blue' },
                      { icon: BellIcon, label: 'Remind Medication', color: 'amber' },
                      { icon: CalendarIcon, label: 'Schedule Visit', color: 'green' },
                    ].map((action, i) => (
                      <button key={i} className="flex flex-col items-center justify-center p-4 bg-white border-2 border-purple-100 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group">
                        <div className={`h-10 w-10 rounded-lg bg-${action.color}-100 flex items-center justify-center text-${action.color}-600 mb-2 group-hover:scale-110 transition-transform`}>
                          <action.icon />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Chart */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Daily Activity Pattern</h2>
                  <p className="text-sm text-gray-500">Heart rate and activity levels throughout the day</p>
                </div>
                <div className="flex items-center gap-2 text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">
                  <WifiIcon />
                  <span className="text-sm font-medium">Live tracking</span>
                </div>
              </div>
              
              <div className="h-64 flex items-end gap-4">
                {vitalHistory.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col items-center gap-1">
                      <span className="text-xs text-gray-500">{item.heartRate} BPM</span>
                      <div className="w-full relative h-40 flex items-end justify-center gap-1">
                        <div 
                          className="w-5 bg-gradient-to-t from-purple-400 to-purple-600 rounded-t-lg transition-all duration-500 hover:opacity-80"
                          style={{ height: `${item.activity}%` }}
                        />
                        <div 
                          className="w-5 bg-gradient-to-t from-red-300 to-red-500 rounded-t-lg transition-all duration-500 hover:opacity-80"
                          style={{ height: `${(item.heartRate / 100) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">{item.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-purple-100">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gradient-to-t from-purple-400 to-purple-600" />
                  <span className="text-sm text-gray-600">Activity Level</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gradient-to-t from-red-300 to-red-500" />
                  <span className="text-sm text-gray-600">Heart Rate</span>
                </div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
                <button className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center gap-1">
                  View Full Schedule
                  <ChevronRightIcon />
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { time: '9:00 AM', event: 'Morning Medication', status: 'completed', type: 'medication' },
                  { time: '10:30 AM', event: 'Morning Walk', status: 'completed', type: 'activity' },
                  { time: '12:00 PM', event: 'Lunch & Noon Medication', status: 'upcoming', type: 'meal' },
                  { time: '2:00 PM', event: 'Memory Exercise Games', status: 'upcoming', type: 'therapy' },
                  { time: '4:00 PM', event: 'Video Call with Family', status: 'upcoming', type: 'social' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 p-4 rounded-xl transition-all ${item.status === 'completed' ? 'bg-green-50 border border-green-100' : 'bg-purple-50 border border-purple-100'}`}>
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}>
                      <ClockIcon />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.event}</p>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                      {item.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Notifications Panel */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Notifications</h2>
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-xs text-white font-medium">
                      {notifications.filter(n => !n.read).length}
                    </span>
                    <BellIcon className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4 max-h-80 overflow-y-auto custom-scrollbar">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-xl mb-3 border-l-4 transition-all ${getNotificationStyle(notification.type)} ${!notification.read ? 'ring-2 ring-purple-200' : ''}`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <p className={`font-medium text-sm ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                        {notification.message}
                      </p>
                      {!notification.read && (
                        <span className="h-2 w-2 rounded-full bg-purple-600 flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medication Log */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Today's Medication</h2>
                <div className="flex items-center gap-2 text-purple-600">
                  <ClockIcon />
                  <span className="text-sm font-medium">Next: {patientStatus.medicationNext}</span>
                </div>
              </div>
              <div className="space-y-3">
                {medications.map((med) => (
                  <div key={med.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">{med.name}</p>
                        <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded">{med.purpose}</span>
                      </div>
                      <p className="text-sm text-gray-600">{med.dosage} • {med.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(med.status)}`}>
                      {med.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                <ShieldIcon />
                View Full History
                <ChevronRightIcon />
              </button>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <PhoneIcon />
                Emergency Contacts
              </h3>
              <div className="space-y-3">
                {emergencyContacts.map((contact, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-purple-200">{contact.role}</p>
                    </div>
                    <a href={`tel:${contact.phone}`} className="px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors">
                      Call
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Sleep & Wellness Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100/50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Wellness Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <MoonIcon />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Sleep Quality</p>
                      <p className="text-sm text-gray-500">Last night</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">{patientStatus.sleepQuality}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">
                      <HeartIcon />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Mood</p>
                      <p className="text-sm text-gray-500">Current</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">{patientStatus.mood}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyDashboard;
