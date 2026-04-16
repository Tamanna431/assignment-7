import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Phone, MessageSquare, Video, Mail } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TimelineContext } from "../context/TimelineContext";
import friendsData from "../data/friends.json";

const FriendDetails = () => {
  const { id } = useParams();
  const { addEntry } = useContext(TimelineContext);
  const friend = friendsData.find(f => f.id === Number(id));

  const handleCheckIn = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} with ${friend.name} logged successfully!`);
  };

  if (!friend) {
    return <div className="text-center py-20">Friend not found</div>;
  }

  const getStatusColor = (status) => {
    switch(status) {
      case "on-track": return "bg-green-500";
      case "almost due": return "bg-yellow-500";
      case "overdue": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Left Column - Friend Info */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <img 
            src={friend.picture} 
            alt={friend.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold text-center mb-2">{friend.name}</h2>
          
          <div className={`inline-block px-4 py-1 rounded-full text-white text-sm font-medium mb-3 ${getStatusColor(friend.status)}`}>
            {friend.status}
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {friend.tags.map((tag, index) => (
              <span key={index} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-center italic mb-2">"{friend.bio}"</p>
          <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mb-6">
            <Mail size={16} />
            <span>{friend.email}</span>
          </div>

          <div className="space-y-3">
            <button className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
              <span>⏰</span> Snooze 2 Weeks
            </button>
            <button className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
              <span>📦</span> Archive
            </button>
            <button className="w-full py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 flex items-center justify-center gap-2">
              <span>🗑️</span> Delete
            </button>
          </div>
        </div>

        {/* Right Column - Stats & Check-in */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow border text-center">
              <p className="text-3xl font-bold text-gray-800">{friend.days_since_contact}</p>
              <p className="text-gray-600 text-sm">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border text-center">
              <p className="text-3xl font-bold text-gray-800">{friend.goal}</p>
              <p className="text-gray-600 text-sm">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border text-center">
              <p className="text-xl font-bold text-gray-800">{friend.next_due_date}</p>
              <p className="text-gray-600 text-sm">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Relationship Goal</h3>
              <button className="px-4 py-1 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                Edit
              </button>
            </div>
            <p className="text-gray-700">
              Connect every <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-lg font-semibold mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button 
                onClick={() => handleCheckIn('Call')}
                className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <Phone size={32} className="mb-2 text-gray-700" />
                <span className="font-medium">Call</span>
              </button>
              <button 
                onClick={() => handleCheckIn('Text')}
                className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <MessageSquare size={32} className="mb-2 text-gray-700" />
                <span className="font-medium">Text</span>
              </button>
              <button 
                onClick={() => handleCheckIn('Video')}
                className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <Video size={32} className="mb-2 text-gray-700" />
                <span className="font-medium">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;