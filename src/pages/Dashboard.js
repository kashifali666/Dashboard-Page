import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardCard from "../components/DashboardCard";
import Dropdown from "../components/Dropdown";
import TeamSidebar from "../components/TeamSidebar";
import cardImage1 from "../assets/wrestler.png";
import cardImage2 from "../assets/exercise.png";
import cardImage3 from "../assets/workout.png";
import cardImage4 from "../assets/Wear a Mask.png";
import SubCoaches from "../components/SubCoaches";
import avatar1 from "../assets/avatar1.png";

const Dashboard = () => {
  const avatars = [avatar1, avatar1, avatar1, avatar1, avatar1, avatar1];

  return (
    <div className="flex flex-col h-screen font-poppins">
      {/* Navbar */}

      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Left Sidebar */}
        <div className="w-1/5 sm:w-1/6 bg-gray-50">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow bg-gray-50 p-2 sm:p-4">
          {/* Dashboard Cards */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4 sm:mb-6">
            Hello, Micheal Starc | <span className="text-gray-400">Coach</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-4">
            <DashboardCard
              title=<span className="text-xs text-gray-400">Head Coaches</span>
              value=<span className="font-bold text-sm">27</span>
              image={cardImage1}
            />
            <DashboardCard
              title=<span className="text-xs text-gray-400">
                Total Practice Plans
              </span>
              value=<span className="font-bold text-sm">1,289</span>
              image={cardImage3}
            />
            <DashboardCard
              title=<span className="text-xs text-gray-400">Total Drills</span>
              value=<span className="font-bold text-sm">1,664</span>
              image={cardImage4}
            />
            <DashboardCard
              title=<span className="text-xs text-gray-400">Total Teams</span>
              value=<span className="font-bold text-sm">86</span>
              image={cardImage2}
            />
          </div>

          {/* Team Activities Section */}
          <div className="mt-4 sm:mt-6 flex justify-evenly flex-col sm:flex-row sm:gap-4">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-4 bg-white rounded-md shadow-md">
              <h3 className="text-lg text-gray-500 mb-2 sm:mb-4">
                Practice Plans
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="p-2 flex items-start">
                  <img src={cardImage2} alt="Icon" className="w-6 h-6 mr-2" />

                  <div>
                    <span className="font-bold">
                      Practice Plan - Head Exercise Relax
                    </span>
                    <br />
                    <span className="text-gray-400">There are 140 Drills</span>
                  </div>
                </li>
                <li className="p-2 flex items-start">
                  <img src={cardImage2} alt="Icon" className="w-6 h-6 mr-2" />

                  <div>
                    <span className="font-bold">
                      Practice Plan - Head Exercise Relax
                    </span>
                    <br />
                    <span className="text-gray-400">There are 140 Drills</span>
                  </div>
                </li>
                <li className="p-2 flex items-start">
                  <img src={cardImage2} alt="Icon" className="w-6 h-6 mr-2" />

                  <div>
                    <span className="font-bold">
                      Practice Plan - Head Exercise Relax
                    </span>
                    <br />
                    <span className="text-gray-400">There are 140 Drills</span>
                  </div>
                </li>
                <h3 className="text-end font-bold">Show All</h3>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-4 bg-white rounded-md shadow-md">
              <h3 className="text-lg text-gray-500 mb-2 sm:mb-4">
                Team Activities
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="p-2 ">
                  <span className="font-bold">
                    Team Rookies Activities Running
                  </span>
                  <br />
                  <span className="text-gray-400">15 Practices Assigned</span>
                </li>
                <li className="p-2 ">
                  <span className="font-bold">
                    Team Rookies Activities Running
                  </span>
                  <br />
                  <span className="text-gray-400">15 Practices Assigned</span>
                </li>
                <li className="p-2 ">
                  <span className="font-bold">
                    Team Rookies Activities Running
                  </span>
                  <br />
                  <span className="text-gray-400">15 Practices Assigned</span>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-4 bg-white rounded-md shadow-md">
              <h3 className="text-lg text-gray-500 mb-2 sm:mb-4">Teams</h3>
              <ul className="space-y-2 text-xs">
                <li className="p-2 ">
                  <span className="font-bold">Team Rookies</span>
                  <br />
                  <span className="text-gray-400">14 Members</span>
                </li>
                <li className="p-2 ">
                  <span className="font-bold">Team Navy</span>
                  <br />
                  <span className="text-gray-400">14 Members</span>
                </li>
                <li className="p-2 ">
                  <span className="font-bold">Team Booster</span>
                  <br />
                  <span className="text-gray-400">14 Members</span>
                </li>
                <li className="p-2 ">
                  <span className="font-bold">Team Ladies</span>
                  <br />
                  <span className="text-gray-400">14 Members</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sub Coaches Section */}
          <SubCoaches avatars={avatars} />
        </div>

        {/* Right Sidebar */}
        <div className="w-1/5 sm:w-1/6 bg-gray-50">
          <Dropdown />
          <TeamSidebar />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
