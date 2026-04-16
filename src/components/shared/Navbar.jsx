import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white border-t border-gray-200 py-4 mt-auto">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Left Side */}
        <div className="flex items-center">
           <span className="text-xl font-bold text-green-900">KeenKeeper</span>
        </div>

        {/* Links Right Side */}
        <div className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium transition ${
                isActive 
                  ? "bg-green-700 text-white" 
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Home size={16} />
            <span>Home</span>
          </NavLink>

          <NavLink 
            to="/timeline" 
            className={({ isActive }) => 
              `flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium transition ${
                isActive 
                  ? "bg-green-700 text-white" 
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Clock size={16} />
            <span>Timeline</span>
          </NavLink>

          <NavLink 
            to="/stats" 
            className={({ isActive }) => 
              `flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium transition ${
                isActive 
                  ? "bg-green-700 text-white" 
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <BarChart size={16} />
            <span>Stats</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;