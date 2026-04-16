import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import friendsData from "../data/friends.json";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1000);
  }, []);

  // Calculate stats
  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const needAttention = friends.filter(f => f.status === "overdue" || f.status === "almost due").length;
  const interactionsThisMonth = 12; // You can calculate this from timeline later

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case "on-track": return "bg-green-100 text-green-800";
      case "almost due": return "bg-yellow-100 text-yellow-800";
      case "overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-green-700 text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto hover:bg-green-800">
          <Plus size={18} />
          Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow text-center border">
          <p className="text-3xl font-bold text-gray-800">{totalFriends}</p>
          <p className="text-gray-600">Total Friends</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center border">
          <p className="text-3xl font-bold text-green-600">{onTrack}</p>
          <p className="text-gray-600">On Track</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center border">
          <p className="text-3xl font-bold text-red-600">{needAttention}</p>
          <p className="text-gray-600">Need Attention</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center border">
          <p className="text-3xl font-bold text-blue-600">{interactionsThisMonth}</p>
          <p className="text-gray-600">Interactions This Month</p>
        </div>
      </div>

      {/* Friends Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map(friend => (
            <Link 
              key={friend.id} 
              to={`/friend/${friend.id}`}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border"
            >
              <img 
                src={friend.picture} 
                alt={friend.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center text-gray-800 mb-1">
                {friend.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-2">
                {friend.days_since_contact} days
              </p>
              <div className="flex flex-wrap gap-1 justify-center mb-3">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className={`text-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(friend.status)}`}>
                {friend.status}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;