// Dashboard.jsx
import React from "react";
import {
  FiVideo,
  FiUsers,
  FiCpu,
  FiCalendar,
} from "react-icons/fi"; // Icons for video, agents, AI, meeting

const Dashboard = () => {
  const menuItems = [
    { name: "Meeting", icon: <FiCalendar size={20} /> },
    { name: "Video", icon: <FiVideo size={20} /> },
    { name: "Agents", icon: <FiUsers size={20} /> },
    { name: "AI Bot", icon: <FiCpu size={20} /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <img src="/Chat2.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Menu */}
        <div className="flex-1 mt-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-700 transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
        {/* Here you can add your main dashboard components */}
      </div>
    </div>
  );
};

export default Dashboard;
