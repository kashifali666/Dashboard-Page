import React from "react";
import teamImg1 from "../assets/team1.png";
import teamImg2 from "../assets/Team.png";

const TeamSidebar = () => {
  const teams = [
    {
      name: "Team Rookies",
      members: 14,
      image: teamImg1,
    },
    {
      name: "Team Navy",
      members: 14,
      image: teamImg2,
    },
  ];

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md p-4 mr-4 w-38 lg:block">
      <h3 className="text-xl font-bold mb-4">Teams</h3>
      <ul className="space-y-1">
        {teams.map((team, index) => (
          <li key={index} className="p-0 hover:bg-gray-100 flex flex-col">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>{team.name}</span>
            </div>

            <span className="text-gray-500 text-sm">
              {team.members} Members
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamSidebar;
