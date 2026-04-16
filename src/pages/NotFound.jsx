import { Link } from "react-router-dom";
import { Home, Users } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 p-6 rounded-full">
            <Users size={64} className="text-green-600" />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Lost in the KeenKeeper?
        </h2>
        
        <p className="text-gray-600 mb-8">
          Looks like this friendship connection doesn't exist yet. 
          Time to make a new one!
        </p>
         <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium shadow-lg"
        >
          <Home size={20} />
          Back to Your Friends
        </Link>
       
      </div>
    </div>
  );
};

export default NotFound;